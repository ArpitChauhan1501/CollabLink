'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { User, Edit, Image, GraduationCap, Code, Users, Eye, CheckCircle, ArrowLeft, X } from 'lucide-react';

interface FormDataType {
  fullName: string;
  username: string;
  email: string;
  gender: string;
  age: string;
  location: string;
  college: string;
  degree: string;
  year: string;
  primaryRole: string;
  experienceLevel: string;
  aboutMe: string;
  interestedDomains: string;
  preferredTeamRole: string;
  tagline: string;
  lookingToJoin: boolean;
  lookingForMembers: boolean;
  availability: string;
}

type WorkedWithType = Record<string, boolean>;

interface ExtendedUser {
  fullName?: string;
  username?: string;
  email?: string;
  gender?: string;
  age?: number;
  location?: string;
  college?: string;
  degree?: string;
  year?: string;
  primaryRole?: string;
  experienceLevel?: string;
  aboutMe?: string;
  interestedDomains?: string;
  preferredTeamRole?: string;
  tagline?: string;
  lookingToJoin?: boolean;
  lookingForMembers?: boolean;
  availability?: string;
  profilePic?: string;
  workedWith?: WorkedWithType;
}

export default function ProfilePage() {
  const router = useRouter();
  const { user } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState<FormDataType>({
    fullName: '',
    username: '',
    email: '',
    gender: '',
    age: '',
    location: '',
    college: '',
    degree: '',
    year: '',
    primaryRole: '',
    experienceLevel: '',
    aboutMe: '',
    interestedDomains: '',
    preferredTeamRole: '',
    tagline: '',
    lookingToJoin: false,
    lookingForMembers: false,
    availability: '',
  });
  const [editWorkedWith, setEditWorkedWith] = useState<WorkedWithType>({});
  const [pendingProfilePic, setPendingProfilePic] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormDataType>({
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    gender: 'Male',
    age: '22',
    location: 'New York, NY',
    college: 'MIT',
    degree: 'Computer Science',
    year: '2026',
    primaryRole: 'Full-Stack Developer',
    experienceLevel: 'Intermediate',
    aboutMe: 'Passionate about building innovative web applications and contributing to open-source projects.',
    interestedDomains: 'AI, Web Development, Blockchain',
    preferredTeamRole: 'Backend Developer',
    tagline: 'Full-Stack Developer passionate about AI',
    lookingToJoin: true,
    lookingForMembers: false,
    availability: 'Weekends, Evenings',
  });

  const [workedWith, setWorkedWith] = useState<WorkedWithType>({
    Aarif: true,
    Divyansh: true,
    Arpit: false,
    Mohit: true,
  });

  const [profilePic, setProfilePic] = useState('/default-pic.png');

  const [projects] = useState([
    'College Predictor',
    'Laptop Advisor',
    'CUET Advisor',
  ]);

  const [stats] = useState({
    views: 286,
    hackathonsParticipated: 12,
    teamsBuilt: 8,
    projectsCreated: 10,
  });

  const badges = ['Complete Creating Team'];

  useEffect(() => {
    if (user) {
      const extendedUser = user as ExtendedUser;
      const updatedFormData: FormDataType = {
        fullName: extendedUser.fullName || 'John Doe',
        username: extendedUser.username || 'johndoe',
        email: extendedUser.email || 'john.doe@example.com',
        gender: extendedUser.gender || 'Male',
        age: extendedUser.age?.toString() || '22',
        location: extendedUser.location || 'New York, NY',
        college: extendedUser.college || 'MIT',
        degree: extendedUser.degree || 'Computer Science',
        year: extendedUser.year || '2026',
        primaryRole: extendedUser.primaryRole || 'Full-Stack Developer',
        experienceLevel: extendedUser.experienceLevel || 'Intermediate',
        aboutMe: extendedUser.aboutMe || 'Passionate about building innovative web applications and contributing to open-source projects.',
        interestedDomains: extendedUser.interestedDomains || 'AI, Web Development, Blockchain',
        preferredTeamRole: extendedUser.preferredTeamRole || 'Backend Developer',
        tagline: extendedUser.tagline || 'Full-Stack Developer passionate about AI',
        lookingToJoin: extendedUser.lookingToJoin ?? true,
        lookingForMembers: extendedUser.lookingForMembers ?? false,
        availability: extendedUser.availability || 'Weekends, Evenings',
      };
      setFormData(updatedFormData);
      setProfilePic(extendedUser.profilePic || '/default-pic.png');
      setWorkedWith(extendedUser.workedWith || {
        Aarif: true,
        Divyansh: true,
        Arpit: false,
        Mohit: true,
      });
    }
  }, [user]);

  const handleStartEditing = () => {
    setEditFormData({ ...formData });
    setEditWorkedWith({ ...workedWith });
    setPendingProfilePic(null);
    setIsEditing(true);
  };

  const handleCancelEditing = () => {
    if (pendingProfilePic) {
      URL.revokeObjectURL(pendingProfilePic);
    }
    setPendingProfilePic(null);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleWorkedWithChange = (person: string) => {
    setEditWorkedWith(prev => ({
      ...prev,
      [person]: !prev[person],
    }));
  };

  const handleProfilePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (pendingProfilePic) {
        URL.revokeObjectURL(pendingProfilePic);
      }
      const url = URL.createObjectURL(file);
      setPendingProfilePic(url);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save
    console.log('Profile updated:', editFormData, editWorkedWith);
    setFormData(editFormData);
    setWorkedWith(editWorkedWith);
    if (pendingProfilePic) {
      setProfilePic(pendingProfilePic);
      setPendingProfilePic(null);
    }
    alert('Profile updated successfully!');
    setIsEditing(false);
  };

  const currentProfilePic = pendingProfilePic || profilePic;

  const ProfilePic = () => (
    <div className="relative">
      {currentProfilePic === '/default-pic.png' ? (
        <div className="w-20 h-20 bg-gradient-to-br from-[#FFD93D] to-[#FFAA33] rounded-full flex items-center justify-center border-4 border-[#2D3648] shadow-xl">
          <User className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>
      ) : (
        <img 
          src={currentProfilePic} 
          alt="Profile" 
          className="w-20 h-20 rounded-full object-cover border-4 border-[#2D3648] shadow-xl"
        />
      )}
      {isEditing && (
        <label className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FF9A62] rounded-full border-4 border-white cursor-pointer flex items-center justify-center">
          <Image className="w-4 h-4 text-white" />
          <input
            type="file"
            onChange={handleProfilePicUpload}
            className="hidden"
            accept="image/*"
          />
        </label>
      )}
    </div>
  );

  const ViewModeContent = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
          Tagline
        </label>
        <p className="text-lg font-semibold text-[#2D3648] bg-gray-50 p-4 rounded-xl border border-[#2D3648]/20">
          {formData.tagline}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {formData.lookingToJoin && (
          <span className="px-4 py-2 rounded-full font-bold text-sm bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white">
            Looking for team to join
          </span>
        )}
        {formData.lookingForMembers && (
          <span className="px-4 py-2 rounded-full font-bold text-sm bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white">
            Looking for members to add
          </span>
        )}
        {!(formData.lookingToJoin || formData.lookingForMembers) && (
          <p className="text-[#2D3648]/60 italic">No preferences set</p>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-[#2D3648]">Personal Info</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Full Name</span>
            <span className="text-[#2D3648]/80">{formData.fullName}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Username</span>
            <span className="text-[#2D3648]/80">{formData.username}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Email</span>
            <span className="text-[#2D3648]/80">{formData.email}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Gender</span>
            <span className="text-[#2D3648]/80">{formData.gender}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Age</span>
            <span className="text-[#2D3648]/80">{formData.age}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Location</span>
            <span className="text-[#2D3648]/80">{formData.location}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-[#2D3648]">Education</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">College</span>
            <span className="text-[#2D3648]/80">{formData.college}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Degree</span>
            <span className="text-[#2D3648]/80">{formData.degree}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Year</span>
            <span className="text-[#2D3648]/80">{formData.year}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-[#2D3648]">Skills & Experience</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Primary Role</span>
            <span className="text-[#2D3648]/80">{formData.primaryRole}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Experience Level</span>
            <span className="text-[#2D3648]/80">{formData.experienceLevel}</span>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-[#2D3648]">About Me</span>
            <p className="bg-gray-50 p-4 rounded-xl border border-[#2D3648]/20 whitespace-pre-wrap text-[#2D3648] mt-1">
              {formData.aboutMe}
            </p>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Interested Domains</span>
            <span className="text-[#2D3648]/80">{formData.interestedDomains}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#2D3648]/10">
            <span className="font-semibold text-[#2D3648]">Preferred Team Role</span>
            <span className="text-[#2D3648]/80">{formData.preferredTeamRole}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-[#2D3648]">Projects</h3>
        <ul className="space-y-2">
          {projects.map((project, index) => (
            <li key={index} className="flex items-center space-x-2 px-4 py-2 bg-[#6DD5ED]/10 rounded-xl border border-[#2D3648]/20">
              <Code className="w-4 h-4 text-[#2193B0]" />
              <span className="font-semibold text-[#2D3648]">{project}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
          Availability
        </label>
        <p className="text-lg font-semibold text-[#2D3648] bg-gray-50 p-4 rounded-xl border border-[#2D3648]/20">
          {formData.availability}
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-[#2D3648]">Recently Worked With</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(workedWith)
            .filter(([_, checked]) => checked)
            .map(([person]) => (
              <span
                key={person}
                className="px-4 py-2 bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white rounded-full text-sm font-bold"
              >
                {person}
              </span>
            ))}
          {Object.values(workedWith).every((v) => !v) && (
            <p className="text-[#2D3648]/60 italic">No recent collaborations</p>
          )}
        </div>
      </div>
    </div>
  );

  const EditModeContent = () => (
    <form onSubmit={handleSave}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
            Tagline
          </label>
          <input
            type="text"
            name="tagline"
            value={editFormData.tagline}
            onChange={handleInputChange}
            className="w-full px-5 py-4 rounded-2xl border-[3px] border-[#2D3648] focus:outline-none focus:ring-4 focus:ring-[#FF9A62]/30 transition-all font-semibold text-base"
            placeholder="e.g., Full-Stack Developer passionate about AI"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-2 cursor-pointer w-full">
            <input
              type="checkbox"
              name="lookingToJoin"
              checked={editFormData.lookingToJoin}
              onChange={handleInputChange}
              className="hidden"
            />
            <span className={`w-full px-4 py-2 rounded-full font-bold text-sm ${editFormData.lookingToJoin ? 'bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white' : 'bg-white text-[#2D3648] border border-[#2D3648]/20'}`}>
              Looking for team to join
            </span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer w-full">
            <input
              type="checkbox"
              name="lookingForMembers"
              checked={editFormData.lookingForMembers}
              onChange={handleInputChange}
              className="hidden"
            />
            <span className={`w-full px-4 py-2 rounded-full font-bold text-sm ${editFormData.lookingForMembers ? 'bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white' : 'bg-white text-[#2D3648] border border-[#2D3648]/20'}`}>
              Looking for members to add
            </span>
          </label>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#2D3648]">Personal Info</h3>
          <input type="text" name="fullName" value={editFormData.fullName} onChange={handleInputChange} placeholder="Full Name" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
          <input type="text" name="username" value={editFormData.username} onChange={handleInputChange} placeholder="Username" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
          <input type="email" name="email" value={editFormData.email} onChange={handleInputChange} placeholder="Email" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
          <input type="text" name="gender" value={editFormData.gender} onChange={handleInputChange} placeholder="Gender" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
          <input type="text" name="age" value={editFormData.age} onChange={handleInputChange} placeholder="Age" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
          <input type="text" name="location" value={editFormData.location} onChange={handleInputChange} placeholder="Location" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#2D3648]">Education</h3>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="college" value={editFormData.college} onChange={handleInputChange} placeholder="College" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
            <input type="text" name="degree" value={editFormData.degree} onChange={handleInputChange} placeholder="Degree" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
          </div>
          <input type="text" name="year" value={editFormData.year} onChange={handleInputChange} placeholder="Year" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#2D3648]">Skills & Experience</h3>
          <input type="text" name="primaryRole" value={editFormData.primaryRole} onChange={handleInputChange} placeholder="Primary Role" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
          <input type="text" name="experienceLevel" value={editFormData.experienceLevel} onChange={handleInputChange} placeholder="Experience Level" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
          <textarea name="aboutMe" value={editFormData.aboutMe} onChange={handleInputChange} placeholder="About Me" rows={3} className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
          <input type="text" name="interestedDomains" value={editFormData.interestedDomains} onChange={handleInputChange} placeholder="Interested Domains" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
          <input type="text" name="preferredTeamRole" value={editFormData.preferredTeamRole} onChange={handleInputChange} placeholder="Preferred Team Role" className="w-full px-5 py-3 rounded-xl border-2 border-[#2D3648]/50 focus:ring-2 focus:ring-[#FFD93D]" />
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#2D3648]">Projects</h3>
          <ul className="space-y-2">
            {projects.map((project, index) => (
              <li key={index} className="flex items-center space-x-2 px-4 py-2 bg-[#6DD5ED]/10 rounded-xl border border-[#2D3648]/20">
                <Code className="w-4 h-4 text-[#2193B0]" />
                <span className="font-semibold text-[#2D3648]">{project}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-[#2D3648] uppercase tracking-wide">
            Availability
          </label>
          <input
            type="text"
            name="availability"
            value={editFormData.availability}
            onChange={handleInputChange}
            className="w-full px-5 py-4 rounded-2xl border-[3px] border-[#2D3648] focus:outline-none focus:ring-4 focus:ring-[#FF9A62]/30 transition-all font-semibold text-base"
            placeholder="e.g., Weekends, Evenings"
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#2D3648]">Recently Worked With</h3>
          <div className="space-y-2">
            {Object.entries(editWorkedWith).map(([person, checked]) => (
              <label key={person} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleWorkedWithChange(person)}
                  className="hidden"
                />
                <span className={`px-4 py-2 rounded-full font-bold text-sm ${checked ? 'bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white' : 'bg-white text-[#2D3648] border border-[#2D3648]/20'}`}>
                  {person}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          type="submit"
          className="doodle-button bg-gradient-to-r from-[#FFD93D] to-[#FFAA33] text-white hover:from-[#FFC91D] hover:to-[#FF9A23] text-lg flex items-center justify-center space-x-2 py-4 px-8 rounded-2xl font-bold text-base mx-auto"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </form>
  );

  const Content = () => isEditing ? <EditModeContent /> : <ViewModeContent />;

  return (
    <ProtectedRoute>
      <div className="min-h-screen py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 px-4 py-2 bg-white/80 rounded-full border-2 border-[#2D3648]/30 hover:bg-[#FFD93D]/20 transition-all text-[#2D3648] font-semibold shadow-lg mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            {!isEditing ? (
              <button
                onClick={handleStartEditing}
                className="flex items-center space-x-2 px-4 py-2 bg-white/80 rounded-full border-2 border-[#2D3648]/30 hover:bg-[#FFD93D]/20 transition-all text-[#2D3648] font-semibold shadow-lg"
              >
                <Edit className="w-5 h-5" />
                <span>Edit Profile</span>
              </button>
            ) : (
              <button
                onClick={handleCancelEditing}
                className="flex items-center space-x-2 px-4 py-2 bg-white/80 rounded-full border-2 border-red-400/30 hover:bg-red-50 transition-all text-red-600 font-semibold shadow-lg"
              >
                <X className="w-5 h-5" />
                <span>Cancel</span>
              </button>
            )}
          </div>

          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <ProfilePic />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#2D3648] mb-4">
              Your <span className="squiggle-underline">Profile</span>
            </h1>
            <p className="text-lg text-[#2D3648]/70 font-semibold max-w-2xl mx-auto">
              Update your details to connect with amazing teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="doodle-card p-6 rounded-3xl shadow-2xl bg-white">
              <Content />
            </div>

            <div className="space-y-6">
              <div className="doodle-card p-6 rounded-3xl shadow-2xl bg-white">
                <h3 className="text-lg font-bold text-[#2D3648] mb-4">My Projects</h3>
                <ul className="space-y-3">
                  {projects.map((project, index) => (
                    <li key={index} className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#FFD93D]/20 to-[#FFAA33]/20 rounded-xl">
                      <span className="font-semibold text-[#2D3648]">{project}</span>
                      <Eye className="w-5 h-5 text-[#2D3648]/70" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="doodle-card p-6 rounded-3xl shadow-2xl bg-white">
                <h3 className="text-lg font-bold text-[#2D3648] mb-4">My Teams</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#6DD5ED]/20 to-[#2193B0]/20 rounded-xl">
                    <span className="font-semibold text-[#2D3648]">Code Warriors</span>
                    <Users className="w-5 h-5 text-[#2D3648]/70" />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#6DD5ED]/20 to-[#2193B0]/20 rounded-xl">
                    <span className="font-semibold text-[#2D3648]">AI Innovators</span>
                    <Users className="w-5 h-5 text-[#2D3648]/70" />
                  </div>
                </div>
              </div>

              <div className="doodle-card p-6 rounded-3xl shadow-2xl bg-white">
                <h3 className="text-lg font-bold text-[#2D3648] mb-4">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge, index) => (
                    <div key={index} className="px-4 py-2 bg-gradient-to-r from-[#FF9A62] to-[#FF6B9D] text-white rounded-full text-sm font-bold border-2 border-[#2D3648]">
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="doodle-card p-4 rounded-3xl shadow-2xl bg-white text-center">
                  <GraduationCap className="w-8 h-8 text-[#FF9A62] mx-auto mb-2" />
                  <p className="text-sm text-[#2D3648]/70">Participated in</p>
                  <p className="text-2xl font-bold text-[#2D3648]">{stats.hackathonsParticipated} Hackathons</p>
                </div>
                <div className="doodle-card p-4 rounded-3xl shadow-2xl bg-white text-center">
                  <Users className="w-8 h-8 text-[#6DD5ED] mx-auto mb-2" />
                  <p className="text-sm text-[#2D3648]/70">Built</p>
                  <p className="text-2xl font-bold text-[#2D3648]">{stats.teamsBuilt} Teams</p>
                </div>
                <div className="doodle-card p-4 rounded-3xl shadow-2xl bg-white text-center">
                  <Code className="w-8 h-8 text-[#FFD93D] mx-auto mb-2" />
                  <p className="text-sm text-[#2D3648]/70">Created</p>
                  <p className="text-2xl font-bold text-[#2D3648]">{stats.projectsCreated} Projects</p>
                </div>
                <div className="doodle-card p-4 rounded-3xl shadow-2xl bg-white text-center">
                  <Eye className="w-8 h-8 text-[#FF6B9D] mx-auto mb-2" />
                  <p className="text-sm text-[#2D3648]/70">Profile Views</p>
                  <p className="text-2xl font-bold text-[#2D3648]">{stats.views}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}