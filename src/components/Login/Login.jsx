import style from './Login.module.css';

export default function Login() {
  return (
    <div className={`container-fluid ${style.pageWrapper}`}>
      <div className="row min-vh-100 align-items-center justify-content-center p-3 p-md-5">
        
        {/* LEFT PANEL: Branding Tagline Statement */}
        <div className="col-lg-6 col-xl-5 d-none d-lg-flex align-items-end h-100">
          <div className={style.taglineCard}>
            <h1 className={style.taglineTitle}>
              Livora: Monumental Architecture, Timeless Legacies.
            </h1>
            <p className={style.taglineSubtext}>
              Step inside a curated world of high-fidelity structural masterworks and elite real estate portfolios.
            </p>
            <div className={style.carouselIndicators}>
              <span className={`${style.indicator} ${style.active}`}></span>
              <span className={style.indicator}></span>
              <span className={style.indicator}></span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Authentication Panel Card */}
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div className={style.loginCard}>
            
            {/* Logo Badge Header */}
            <div className="text-center mb-4">
              <span className={style.brandLogo}>Livora</span>
            </div>

            <h2 className={style.formTitle}>Welcome to the Livora Experience</h2>
            <p className={style.formSubtitle}>Sign in to your account</p>

            {/* Login Credential Form */}
            <form onSubmit={(e) => e.preventDefault()} className={style.authForm}>
              
              <div className={`mb-3 ${style.fieldGroup}`}>
                <label className={style.inputLabel}>Your Email</label>
                <input 
                  type="email" 
                  className={`form-control ${style.customInput}`} 
                  placeholder="Enter your email id here" 
                  required 
                />
              </div>

              <div className={`mb-3 ${style.fieldGroup}`}>
                <label className={style.inputLabel}>Password</label>
                <div className="position-relative d-flex align-items-center">
                  <input 
                    type="password" 
                    className={`form-control ${style.customInput}`} 
                    placeholder="Enter your password here" 
                    required 
                  />
                  <i className={`fa-regular fa-eye ${style.passwordToggleIcon}`}></i>
                </div>
              </div>

              {/* Utility Row */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <label className={style.checkboxLabel}>
                  <input type="checkbox" className={style.hiddenCheckbox} />
                  <span className={style.customCheckbox}></span>
                  <span className={style.checkboxText}>Remember me</span>
                </label>
                <a href="#forgot" className={style.inlineLink}>Forgot Password?</a>
              </div>

              {/* Primary Action Call */}
              <button type="submit" className={style.primarySubmitBtn}>
                Login
              </button>
            </form>

            {/* Third Party Social Gateways */}
            <div className="row g-2 mb-4">
              <div className="col-6">
                <button type="button" className={style.socialBtn}>
                  <i className="fa-brands fa-google me-2"></i> Continue with Google
                </button>
              </div>
              <div className="col-6">
                <button type="button" className={style.socialBtn}>
                  <i className="fa-brands fa-apple me-2"></i> Continue with Apple
                </button>
              </div>
            </div>

            {/* Alternate Destination Gateway */}
            <div className="text-center">
              <span className={style.footerText}>
                Don't have an account? <a href="#register" className={style.goldLink}>Register</a>
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}