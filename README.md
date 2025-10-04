# JanBudget – Participatory Budget Allocation Tool

JanBudget (जनBudget) is a digital platform designed to democratize local governance in India by allowing citizens to directly participate in budget allocation decisions. Through this platform, residents can propose, vote, and track municipal projects, ensuring transparency, accountability, and community-driven development.

---

## Features

### 1. Citizen Participation
- Login via Aadhaar, Voter ID, or Municipal ID.
- Each ward/area has its own budget pool displayed publicly.
- Residents can submit project proposals (e.g., roads, parks, drainage, waste management).

### 2. Proposal Phase
- Citizens submit proposals with title, description, estimated cost, and location.
- Image/document uploads for better context.
- Community-driven feedback with comments, likes, and ratings.

### 3. Voting & Prioritization
- Ward-level voting on submitted proposals.
- Supports multiple voting mechanisms:
  - One-person-one-vote.
  - Ranked-choice voting.
- Real-time progress bar showing votes cast and budget utilization.
- Voter anonymity guaranteed.

### 4. Project Approval & Tracking
- Municipal authorities approve top citizen-voted proposals.
- Project cards display:
  - Budget, location, and progress percentage.
  - Status tags (Tendering, Fund Released, Under Construction, Completed).
- Live timeline and Gantt-style progress tracking.
- Media gallery for official updates and citizen-contributed photos/videos.

### 5. Transparency & Open Data
- All financial transactions logged and publicly accessible.
- Option to use blockchain or open data APIs for auditability.
- Dashboard with graphs showing total budget, allocations, and expenses.

### 6. Complaints & Reviews
- Citizens can file complaints with photos/videos (captured live to reduce fake uploads).
- Complaint threads with upvote/downvote and comments.
- Post-completion project reviews by citizens with community feedback.

### 7. User Profile & Engagement
- Personal dashboard with submitted proposals, voting history (anonymous), and followed projects.
- Badges and gamification for active contributors.
- Multi-language support (English/Hindi).

---

## Tech Stack (Planned)

- **Frontend:** React (Web), React Native (Mobile)
- **Backend:** Node.js (Express or pure Node.js)
- **Database:** PostgreSQL / MongoDB
- **Authentication:** Aadhaar/Voter ID integration, JWT sessions
- **Transparency Layer:** Blockchain or Public APIs
- **Hosting:** AWS EC2 / Government cloud infrastructure

---

## Installation (For Developers)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/janbudget.git
   cd janbudget
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   - `DB_URI` – Database connection string
   - `JWT_SECRET` – Secret for authentication
   - `PORT` – Server port

4. Run the development server:
   ```bash
   npm run dev
   ```

---

## Roadmap

- [ ] Design responsive web and mobile UI.
- [ ] Implement user authentication with government ID.
- [ ] Proposal submission and community feedback.
- [ ] Voting system with multiple mechanisms.
- [ ] Budget allocation engine.
- [ ] Transparency dashboard with financial data.
- [ ] Complaint and citizen review system.
- [ ] Multi-language support.

---

## License

This project is licensed under the MIT License.
