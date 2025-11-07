import React, { useState } from "react";
import {Button} from "./ui/button";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-xl">
            <Plus className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
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
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center gap-3 animate-fade-in">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-green-800">Project Added Successfully!</p>
              <p className="text-sm text-green-600">The project is now available for voting.</p>
            </div>
          </div>
        )}

        {/* Main Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-8">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <FileText className="w-7 h-7" />
              Project Details
            </h2>
            <p className="text-blue-100 mt-1">Fill in all required information</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Project Heading */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                <FileText className="w-4 h-4 text-blue-500" />
                Project Heading
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
                placeholder="Enter project heading (e.g., Road Construction at Main Street)"
                className={`w-full px-4 py-3.5 border-2 rounded-xl transition-all text-gray-700 placeholder-gray-400 bg-gray-50 focus:bg-white focus:outline-none ${
                  errors.heading
                    ? "border-red-500 focus:ring-4 focus:ring-red-100"
                    : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                }`}
              />
              {errors.heading && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.heading}
                </div>
              )}
            </div>

            {/* Project Description */}
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                <FileText className="w-4 h-4 text-blue-500" />
                Project Description
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide detailed description of the project, its scope, and expected outcomes..."
                rows={5}
                className={`w-full px-4 py-3.5 border-2 rounded-xl transition-all text-gray-700 placeholder-gray-400 bg-gray-50 focus:bg-white focus:outline-none resize-none ${
                  errors.description
                    ? "border-red-500 focus:ring-4 focus:ring-red-100"
                    : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                }`}
              />
              {errors.description && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.description}
                </div>
              )}
              <p className="text-xs text-gray-500 mt-2 ml-1">
                Minimum 50 characters recommended for detailed description
              </p>
            </div>

            {/* Ward Selection and Budget in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ward Number with Name */}
              <div>
                <label  htmlFor="wardNumber" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  Ward Number & Name
                  <span className="text-red-500">*</span>
                </label>
                <select
                id='wardNumber'
                  name="wardNumber"
                  value={formData.wardNumber}
                  onChange={handleWardChange}
                  className={`w-full px-4 py-3.5 border-2 rounded-xl  cursor-pointer ${
                    errors.wardNumber
                      ? "border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.wardNumber}
                  </div>
                )}
              </div>

              {/* Approximate Budget */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                  <DollarSign className="w-4 h-4 text-blue-500" />
                  Approximate Budget (₹)
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                    ₹
                  </span>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Enter amount (e.g., 5000000)"
                    className={`w-full pl-10 pr-4 py-3.5 border-2 rounded-xl focus:outline-none ${
                      errors.budget
                        ? "border-red-500 focus:ring-4 focus:ring-red-100"
                        : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    }`}
                  />
                </div>
                {errors.budget && (
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.budget}
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-2 ml-1">
                  Enter the estimated budget in Indian Rupees
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
              variant='secondary'
                type="button"
                onClick={handleReset}
                className="flex-1 py-3.5 px-6 rounded-xl  flex items-center justify-center gap-2 group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                Clear Form
              </Button>
              <Button
                type="submit"
                className="flex-1 py-3.5 px-6 rounded-xl text-white font-bold shadow-xl flex items-center justify-center gap-2 group"
              >
                <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
                <div
                  key={project.id}
                  className="p-5 "
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-lg text-gray-800">{project.heading}</h4>
                    <span className="px-3 py-1  text-xs font-semibold rounded-full">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-1 text-blue-600 font-medium">
                      <MapPin className="w-4 h-4" />
                      Ward {project.wardNumber} - {project.wardName}
                    </span>
                    <span className="flex items-center gap-1 text-purple-600 font-medium">
                      <DollarSign className="w-4 h-4" />
                      ₹ {Number(project.budget).toLocaleString('en-IN')}
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
};

export default AddProjectsForVoting;