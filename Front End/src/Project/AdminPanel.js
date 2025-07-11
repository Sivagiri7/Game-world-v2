import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

function AdminPanel() {
   const [inquiries, setInquiries] = useState([]);
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
   const [editingIndex, setEditingIndex] = useState(null);
   const [users, setUsers] = useState([]); 

  
   useEffect(() => {
    const fetchData = async () => {
       try {
         const inquiryRes = await axios.get("https://game-world-v2-w7e4.onrender.com/api/inquiries");
         setInquiries(inquiryRes.data);

         const userRes = await axios.get("https://game-world-v2-w7e4.onrender.com/api/auth/users");
         setUsers(userRes.data);
       } catch (err) {
         console.log(" Error fetching data:", err);
       }
     };

     fetchData();
  }, []);

  
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       if (editingIndex !== null) {
       const id = inquiries[editingIndex].id;
         const res = await axios.put(`https://game-world-v2-w7e4.onrender.com/api/inquiries/${id}`, formData);
         const updated = [...inquiries];
         updated[editingIndex] = res.data;
         setInquiries(updated);
         setEditingIndex(null);
         setFormData({ name: '', email: '', message: '' });
      } else {
         alert("Select an inquiry to edit.");
       }
     } catch (err) {
       console.error("Submit error:", err);
    }
   };

   
   const handleEdit = (index) => {
     setFormData(inquiries[index]);
     setEditingIndex(index);
   };

 
   const handleDelete = async (index) => {
     const id = inquiries[index].id;
     try {
       await axios.delete(`https://game-world-v2-w7e4.onrender.com/api/inquiries/${id}`);
       const filtered = inquiries.filter((_, i) => i !== index);
       setInquiries(filtered);
     } catch (err) {
       console.error("Delete error:", err);
     }
   };

   
   const handleDeleteUser = async (id) => {
     try {
       await axios.delete(`https://game-world-v2-w7e4.onrender.com/api/auth/users/${id}`);
       setUsers(users.filter(user => user.id !== id));
     } catch (err) {
       console.error("Delete user error:", err);
     }
   };

  return (
     <div className="admin-panel">
       <h1 style={{color:'#00a2ffd8'}}>🛠 Game World Admin Panel</h1>
       <br></br>
       <h2>Registered Users</h2>
       <table className="admin-table">
         <thead>
           <tr>
             <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
           </tr>
         </thead>
         <tbody>
           {users.map((user) => (
             <tr key={user.id}>
               <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.email}</td>
               <td>{user.role}</td>
               <td>
                 <button className="delete" onClick={() => handleDeleteUser(user.id)}>Delete</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
<br></br>
       <h2>Form Inquiries</h2>
       <form className="admin-form" onSubmit={handleSubmit}>
         <input name="name" placeholder="Name" value={formData.name} type="text" onChange={handleChange} required />
         <input name="email" placeholder="Email" value={formData.email} type="email" onChange={handleChange} required />
         <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
         <button type="submit">Update</button>
       </form>

       <table className="admin-table">
         <thead>
           <tr>
             <th>Name</th><th>Email</th><th>Message</th><th>Actions</th>
           </tr>
         </thead>
         <tbody>
           {inquiries.map((inq, index) => (
             <tr key={inq.id}>
               <td>{inq.name}</td>
               <td>{inq.email}</td>
               <td>{inq.message}</td>
               <td>
                 <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                 <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
  );
}

export default AdminPanel;
