import { setupIonicReact } from "@ionic/react";
import './App.scss';


setupIonicReact();

const App: React.FC = () => (
  <div className="container">
    <div className="student-card">
      <div className="card-background"></div>

      <div className="header">
        <div className="logo">
          <div className="logo-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="university-text">
            <div className="university-name">ЖИТОМИРСЬКА</div>
            <div className="university-type">ПОЛІТЕХНІКА</div>
            <div className="university-subtitle">ДЕРЖАВНИЙ УНІВЕРСИТЕТ</div>
          </div>
        </div>
      </div>

      <div className="student-photo-container">
        <div className="photo-frame">
          <div className="student-photo">
             <img className="avatar" src="/myPhoto/myPhoto.jpg" alt="myPhoto" />
          </div>
        </div>
      </div>

      <div className="student-info">
        <h2 className="student-name">Олександр Іващенко</h2>
        <p className="student-role">студент</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <span className="contact-text">kn221_iog@student.ztu.edu.ua</span>
        </div>
        <div className="contact-item">
          <div className="contact-icon">📱</div>
          <span className="contact-text">+380963591473</span>
        </div>
      </div>

      <div className="decorative-elements">
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
        <div className="floating-dot dot-4"></div>
      </div>
    </div>
  </div>
);

export default App;
