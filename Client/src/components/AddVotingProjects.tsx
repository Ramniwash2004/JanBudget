import React, { useState } from "react";
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {Label} from './ui/label';
import { Textarea } from "./ui/textarea";

import { 
  FileText, 
  MapPin, 
  DollarSign, 
  Plus, 
  Save, 
  X,
  CheckCircle,
  AlertCircle,
  Sparkles
} from "lucide-react";
import { DropdownMenu } from "./ui/dropdown-menu";

interface Project {
  id: string;
  heading: string;
  description: string;
  wardNumber: string;
  wardName: string;
  budget: string;
  createdAt: Date;
}

const AddProjectsForVoting: React.FC = () => {
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    wardNumber: "",
    wardName: "",
    budget: "",
  });

  const [projects, setProjects] = useState<Project[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Ward options with names
  const wardOptions = [
  { number: "1",  name: "Veer Savarkar Nagar" },
  { number: "2",  name: "Pt. Jawaharlal Nehru" },
  { number: "3",  name: "Sant Kabir Das" },
  { number: "4",  name: "Yatiyatan Lal" },
  { number: "5",  name: "Banjari Mata Mandir" },
  { number: "6",  name: "Veerangna Avanti Bai" },
  { number: "7",  name: "Telibandha" },
  { number: "8",  name: "Moudhapara" },
  { number: "9",  name: "Shyam Nagar" },
  { number: "10", name: "Santoshi Nagar" },
  { number: "11", name: "Tikrapara" },
  { number: "12", name: "Sadar Bazar" },
  { number: "13", name: "Purani Basti" },
  { number: "14", name: "Changorabhata" },
  { number: "15", name: "Lakhe Nagar" },
  { number: "16", name: "Khamhardih" },
  { number: "17", name: "Amanaka" },
  { number: "18", name: "Pandri" },
  { number: "19", name: "Samta Colony" },
  { number: "20", name: "Shankar Nagar" },
  { number: "21", name: "New Rajendra Nagar" },
  { number: "22", name: "Devendra Nagar" },
  { number: "23", name: "Krishna Nagar" },
  { number: "24", name: "Choubey Colony" },
  { number: "25", name: "Ram Nagar" },
  { number: "26", name: "Sunder Nagar" },
  { number: "27", name: "Rajendra Nagar" },
  { number: "28", name: "Kabir Nagar" },
  { number: "29", name: "Gayatri Nagar" },
  { number: "30", name: "Bhathagaon" },
  { number: "31", name: "Kota" },
  { number: "32", name: "Daganiya" },
  { number: "33", name: "Purani Basti (East)" },
  { number: "34", name: "Brahman Para" },
  { number: "35", name: "Gudhiyari (East)" },
  { number: "36", name: "Gudhiyari (West)" },
  { number: "37", name: "Mowa (East)" },
  { number: "38", name: "Mowa (West)" },
  { number: "39", name: "Kabir Nagar (North)" },
  { number: "40", name: "Kabir Nagar (South)" },
  { number: "41", name: "Tikrapara (South)" },
  { number: "42", name: "Samta Colony (West)" },
  { number: "43", name: "Railway Colony" },
  { number: "44", name: "Hirapur" },
  { number: "45", name: "Boria Kal" },
  { number: "46", name: "Bandhwa Para" },
  { number: "47", name: "Sarona" },
  { number: "48", name: "Bhatagaon (Rural)" },
  { number: "49", name: "Mana Camp" },
  { number: "50", name: "Shivaji Nagar" },
  { number: "51", name: "Civil Lines" },
  { number: "52", name: "Telibandha (North)" },
  { number: "53", name: "Mowa (Central)" },
  { number: "54", name: "Biramdev Kal" },
  { number: "55", name: "Daldal Seoni" },
  { number: "56", name: "Kachna" },
  { number: "57", name: "Saddu" },
  { number: "58", name: "Saraswati Nagar" },
  { number: "59", name: "Tatibandh" },
  { number: "60", name: "Nardaha" },
  { number: "61", name: "Urkura" },
  { number: "62", name: "Dunda" },
  { number: "63", name: "Sejbahar" },
  { number: "64", name: "Bhatapara Road" },
  { number: "65", name: "Amlidih" },
  { number: "66", name: "Bhanpuri" },
  { number: "67", name: "Mathpurena" },
  { number: "68", name: "Mahaveer Nagar" },
  { number: "69", name: "Raipura" },
  { number: "70", name: "Kharsia Road" }
];


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWard = wardOptions.find(w => w.number === e.target.value);
    setFormData({
      ...formData,
      wardNumber: e.target.value,
      wardName: selectedWard?.name || "",
    });
    if (errors.wardNumber) {
      setErrors({ ...errors, wardNumber: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.heading.trim()) {
      newErrors.heading = "Project heading is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    }
    if (!formData.wardNumber) {
      newErrors.wardNumber = "Please select a ward";
    }
    if (!formData.budget.trim()) {
      newErrors.budget = "Budget is required";
    } else if (isNaN(Number(formData.budget))) {
      newErrors.budget = "Budget must be a number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // API call would go here
      const newProject: Project = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date(),
      };

      setProjects([...projects, newProject]);
      
      // Show success message
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

      // Reset form
      setFormData({
        heading: "",
        description: "",
        wardNumber: "",
        wardName: "",
        budget: "",
      });
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("Failed to submit project. Please try again.");
    }
  };

  const handleReset = () => {
    setFormData({
      heading: "",
      description: "",
      wardNumber: "",
      wardName: "",
      budget: "",
    });
    setErrors({});
  };

  return (
  <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center items-center">
    <div className="w-full max-w-4xl">
      
      {/* Header */}
      <div className="text-center justify-center items-center p-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl shadow-xl mb-4">
          <Plus className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 justify-center items-center ">
          Add New Project
        </h1>

        <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-500" />
          Create projects for citizen voting
          <Sparkles className="w-5 h-5 text-blue-500" />
        </p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 shadow-sm">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <div>
            <p className="font-semibold text-green-800">Project Added Successfully!</p>
            <p className="text-sm text-green-600">The project is now available for voting.</p>
          </div>
        </div>
      )}

      {/* Main Form Card */}
      <div className=" flex rounded-3xl shadow-xl overflow-hidden mb-10 justify-center items-center-screen">

        

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          {/* Project Heading */}
          <div>
            <Label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
              <FileText className="w-4 h-4 text-blue-500" />
              Project Heading
              <span className="text-red-500">*</span>
            </Label>

            <Input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              placeholder="Enter project heading (e.g., Road Construction at Main Street)"
              className={`w-full px-4 py-3.5 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none transition ${
                errors.heading
                  ? "border-red-500 ring-4 ring-red-100"
                  : "border-gray-300 focus:border-blue-500 ring-4 ring-blue-100"
              }`}
            />

            {errors.heading && (
              <p className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                {errors.heading}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
              <FileText className="w-4 h-4 text-blue-500" />
              Project Description
              <span className="text-red-500">*</span>
            </label>

            <Textarea
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide detailed description of the project..."
              className={`w-full px-4 py-3.5 border rounded-xl bg-gray-50 focus:bg-white resize-none transition ${
                errors.description
                  ? "border-red-500 ring-4 ring-red-100"
                  : "border-gray-300 focus:border-blue-500 ring-4 ring-blue-100"
              }`}
            />

            {errors.description && (
              <p className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                {errors.description}
              </p>
            )}

            <p className="text-xs text-gray-500 mt-1">
              Minimum 50 characters recommended
            </p>
          </div>

          {/* Grid Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Ward Selection */}
            <div>
              <label htmlFor="wardNumber" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <DropdownMenu className="text-blue-500" />
                Ward Number & Name
                <span className="text-red-500">*</span>
              </label>

              <select
              id="wardNumber"
                name="wardNumber"
                value={formData.wardNumber}
                onChange={handleWardChange}
                className={`w-full px-4 py-3.5 border rounded-xl cursor-pointer bg-white ${
                  errors.wardNumber
                    ? "border-red-500 ring-4 ring-red-100"
                    : "border-gray-300 focus:border-blue-500 ring-4 ring-blue-100"
                }`}
              >
                <option value="">Select Ward</option>
                {wardOptions.map((ward) => (
                  <option key={ward.number} value={ward.number}>
                    Ward {ward.number} - {ward.name}
                  </option>
                ))}
              </select>

              {errors.wardNumber && (
                <p className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.wardNumber}
                </p>
              )}
            </div>

            {/* Budget */}
            <div>
              <Label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <DollarSign className="w-4 h-4 text-blue-500" />
                Approximate Budget (₹)
                <span className="text-red-500">*</span>
              </Label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                  ₹
                </span>

                <Input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Enter amount (e.g., 5000000)"
                  className={`w-full pl-10 pr-4 py-3.5 border rounded-xl focus:outline-none ${
                    errors.budget
                      ? "border-red-500 ring-4 ring-red-100"
                      : "border-gray-300 focus:border-blue-500 ring-4 ring-blue-100"
                  }`}
                />
              </div>

              {errors.budget && (
                <p className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.budget}
                </p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              variant="secondary"
              type="button"
              onClick={handleReset}
              className="flex-1 py-3.5 rounded-xl flex items-center justify-center gap-2"
            >
              <X className="w-5 h-5" />
              Clear Form
            </Button>

            <Button
              type="submit"
              className="flex-1 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <Save className="w-5 h-5" />
              Submit Project
            </Button>
          </div>

        </form>
      </div>

      {/* Recently Added Projects */}
      {projects.length > 0 && (
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <CheckCircle className="w-7 h-7 text-green-500" />
            Recently Added Projects
          </h3>

          <div className="space-y-4">
            {projects.slice(-3).reverse().map((project) => (
              <div key={project.id} className="p-5 rounded-xl bg-gray-50 border">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-lg text-gray-800">{project.heading}</h4>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    Active
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-1 text-blue-600 font-medium">
                    <MapPin className="w-4 h-4" />
                    Ward {project.wardNumber} — {project.wardName}
                  </span>

                  <span className="flex items-center gap-1 text-purple-600 font-medium">
                    <DollarSign className="w-4 h-4" />
                    ₹ {Number(project.budget).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  </div>
);
}

export default AddProjectsForVoting;