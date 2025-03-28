// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './RegistrationForm.css'; // Стили для модального окна

// const RegistrationForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     login: '',
//     mail: '',
//     password: ''
//   });
  
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/auth', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
      
//       if (response.ok) {
//         navigate('/api/cards'); // Переход на страницу игры
//       } else {
//         alert('Ошибка регистрации');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } 
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <button className="close-btn" onClick={onClose}>×</button>
//         <h2>Регистрация пользователя</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Ваш логин"
//             value={formData.login}
//             onChange={(e) => setFormData({...formData, login: e.target.value})}
//           />
//           <input
//             type="email"
//             placeholder="Ваш mail"
//             value={formData.mail}
//             onChange={(e) => setFormData({...formData, mail: e.target.value})}
//           />
//           <input
//             type="password"
//             placeholder="Ваш пароль"
//             value={formData.password}
//             onChange={(e) => setFormData({...formData, password: e.target.value})}
//           />
//           <button type="submit">Зарегистрироваться</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;