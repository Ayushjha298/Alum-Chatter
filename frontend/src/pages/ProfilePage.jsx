import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, GraduationCap, Edit, Save } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile, updateUserDetails } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: authUser?.fullName || "",
    email: authUser?.email || "",
    batch: authUser?.batch || "",
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  const handleEdit = () => setEditMode(true);

  const handleSave = async () => {
    await updateUserDetails(formData);
    setEditMode(false);
  };

  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          {/* Avatar Upload Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
                  isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                }`}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* User Details Section */}
          <div className="space-y-6">
            {["fullName", "email", "batch"].map((field, index) => (
              <div key={index} className="space-y-1.5">
                <div className="text-sm text-zinc-400 flex items-center gap-2">
                  {field === "fullName" && <User className="w-4 h-4" />}
                  {field === "email" && <Mail className="w-4 h-4" />}
                  {field === "batch" && <GraduationCap className="w-4 h-4" />}
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </div>
                {editMode ? (
                  <input
                    type="text"
                    className="px-4 py-2.5 bg-base-200 rounded-lg border w-full"
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  />
                ) : (
                  <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.[field]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4 mt-4">
            {editMode ? (
              <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Save className="w-4 h-4" /> Save
              </button>
            ) : (
              <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Edit className="w-4 h-4" /> Edit
              </button>
            )}
          </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
