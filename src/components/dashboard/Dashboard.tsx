
// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { User, Settings, LogOut, Camera, Save } from 'lucide-react';
// import { auth as authApi } from '../../utils/api';

// export function Dashboard() {
//   const { user, logout } = useAuth();
//   const [isEditing, setIsEditing] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [formData, setFormData] = useState({
//     name: user?.name || '',
//     bio: user?.bio || '',
//     profilePicture: user?.profilePicture || '',
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         name: user.name || '',
//         bio: user.bio || '',
//         profilePicture: user.profilePicture || '',
//       });
//     }
//   }, [user]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const { data } = await authApi.updateProfile(formData);
//       setSuccess('Profile updated successfully!');
//       setIsEditing(false);
//       // Update local user data in localStorage
//       if (typeof window !== 'undefined') {
//         const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
//         localStorage.setItem('user', JSON.stringify({ ...currentUser, ...data }));
//       }
//     } catch (err) {
//       setError('Failed to update profile. Please try again.');
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       if (!['image/jpeg', 'image/png'].includes(file.type)) {
//         setError('Only JPG and PNG formats are allowed.');
//         return;
//       }
//       if (file.size > 2 * 1024 * 1024) {
//         setError('File size must be under 2MB.');
//         return;
//       }

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({ ...formData, profilePicture: reader.result });
//         setError(''); // Clear error if valid
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//       <div className="px-4 py-6 sm:px-0">
//         <div className="bg-white shadow rounded-lg">
//           <div className="px-4 py-5 sm:p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
//               <button
//                 onClick={logout}
//                 className="flex items-center gap-2 text-red-600 hover:text-red-700"
//               >
//                 <LogOut className="w-5 h-5" />
//                 Logout
//               </button>
//             </div>

//             {error && (
//               <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
//                 {error}
//               </div>
//             )}

//             {success && (
//               <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-md">
//                 {success}
//               </div>
//             )}

//             <div className="border-t border-gray-200 pt-6">
//               <div className="flex flex-col items-center mb-6">
//                 <div className="relative">
//                   <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-200">
//                     <img
//                       src={formData.profilePicture || '/path-to-default-avatar.png'}
//                       alt={formData.name}
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                   {isEditing && (
//                     <label className="absolute bottom-0 right-0 bg-indigo-600 rounded-full p-2 cursor-pointer">
//                       <Camera className="h-5 w-5 text-white" />
//                       <input
//                         type="file"
//                         accept="image/*"
//                         className="hidden"
//                         onChange={handleImageChange}
//                       />
//                     </label>
//                   )}
//                 </div>
//                 <div className="mt-4 text-center">
//                   <h3 className="text-xl font-medium text-gray-900">{formData.name}</h3>
//                   <p className="text-gray-500">{user?.email}</p>
//                 </div>
//               </div>

//               {isEditing ? (
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Name</label>
//                     <input
//                       type="text"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Bio</label>
//                     <textarea
//                       value={formData.bio}
//                       onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//                       rows={4}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                       placeholder="Tell us about yourself..."
//                     />
//                   </div>

//                   <div className="flex gap-4">
//                     <button
//                       type="submit"
//                       className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//                     >
//                       <Save className="w-4 h-4" />
//                       Save Changes
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setIsEditing(false)}
//                       className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               ) : (
//                 <div>
//                   <div className="mb-6">
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">Bio</h3>
//                     <p className="text-gray-600">{formData.bio || 'No bio added yet.'}</p>
//                   </div>
//                   <button
//                     onClick={() => setIsEditing(true)}
//                     className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
//                   >
//                     <Settings className="w-4 h-4" />
//                     Edit Profile
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Settings, LogOut, Camera, Save } from 'lucide-react';
import { auth as authApi } from '../../utils/api';

export function Dashboard() {
  const { user, logout, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    profilePicture: user?.profilePicture || '',
  });

  // Fetch updated user profile after editing
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        bio: user.bio || '',
        profilePicture: user.profilePicture || '',
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear the previous messages before the new submission attempt
    setError('');
    setSuccess('');

    try {
      // Send updated data to backend API
      const { data } = await authApi.updateProfile(formData);
      setSuccess('Profile updated successfully!');
      setIsEditing(false);

      // Update user profile in AuthContext
      updateUser(data);

      // Optionally update localStorage
      if (typeof window !== 'undefined') {
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
        localStorage.setItem('user', JSON.stringify({ ...currentUser, ...data }));
      }
    } catch (err) {
      // Ensure no success message is set if there's an error
      setSuccess('');
      setError('Failed to update profile. Please try again.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setError('Only JPG and PNG formats are allowed.');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setError('File size must be under 2MB.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
        setError(''); // Clear error if valid
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
              <button
                onClick={logout}
                className="flex items-center gap-2 text-red-600 hover:text-red-700"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>

            {error && (
              <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-md">
                {success}
              </div>
            )}

            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={formData.profilePicture || '/path-to-default-avatar.png'}
                      alt={formData.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {isEditing && (
                    <label className="absolute bottom-0 right-0 bg-indigo-600 rounded-full p-2 cursor-pointer">
                      <Camera className="h-5 w-5 text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-medium text-gray-900">{formData.name}</h3>
                  <p className="text-gray-500">{user?.email}</p>
                </div>
              </div>

              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Bio</h3>
                    <p className="text-gray-600">{formData.bio || 'No bio added yet.'}</p>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Settings className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
