import { useState } from "react";
import { Zap, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp.js";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();
  const [modalContent, setModalContent] = useState(null);
  const [formError, setFormError] = useState(null);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const { fullName, email, password } = signupData;

    if (!fullName || !email || !password) {
      setFormError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setFormError("Password must be at least 6 characters long");
      return;
    }

    if (!agreeChecked) {
      setFormError("Please agree to the terms to proceed");
      return;
    }

    setFormError(null);
    signupMutation(signupData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      data-theme="forest"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* SIGNUP FORM LEFT-SIDE */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <Zap className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Vibezee
            </span>
          </div>

          {/* ERROR MESSAGES */}
          {formError && (
            <div className="alert alert-error mb-4">
              <span>{formError}</span>
            </div>
          )}
          {error && (
            <div className="alert alert-error mb-4">
              <span>
                {error.response?.data?.message || "Something went wrong"}
              </span>
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4 w-full">
            <div>
              <h2 className="text-xl font-semibold">Create an Account</h2>
              <p className="text-sm opacity-70">
                Join Vibezee and start your language learning adventure!
              </p>
            </div>

            {/* FULL NAME */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Paul"
                className="input input-bordered w-full mt-1.5"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
              />
            </div>

            {/* EMAIL */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="john@gmail.com"
                className="input input-bordered w-full mt-1.5"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
              />
            </div>

            {/* PASSWORD */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="input input-bordered w-full pr-12 mt-1.5"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary z-10"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs opacity-70 mt-1">
                Password must be at least 6 characters long
              </p>
            </div>

            {/* TERMS CHECKBOX */}
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  checked={agreeChecked}
                  onChange={(e) => setAgreeChecked(e.target.checked)}
                />
                <span className="text-xs leading-tight flex flex-wrap gap-x-1">
                  I agree to the{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setModalContent("terms");
                    }}
                    className="text-primary hover:underline"
                  >
                    terms of service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setModalContent("privacy");
                    }}
                    className="text-primary hover:underline"
                  >
                    privacy policy
                  </a>
                </span>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button className="btn btn-primary w-full mt-2" type="submit">
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            {/* SIGN IN LINK */}
            <div className="text-center mt-4">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE & TEXT */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i.png"
                alt="Language connection illustration"
                className="w-full h-full"
              />
            </div>
            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">
                Connect with language partners worldwide
              </h2>
              <p className="opacity-70">
                Practice conversations, make friends, and improve your language
                skills together
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-base-100 p-6 rounded-xl max-w-md w-full shadow-lg relative">
            <h3 className="text-lg font-bold mb-2">
              {modalContent === "terms" ? "Terms of Service" : "Privacy Policy"}
            </h3>
            <div className="text-sm max-h-60 overflow-y-auto text-justify space-y-2">
              {modalContent === "terms" ? (
                <div>
                  <p>
                    Welcome to Vibezee! By using our services, you agree to the
                    following terms:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      You must be at least 13 years old to use the platform.
                    </li>
                    <li>
                      Do not engage in harmful, abusive, or illegal activities.
                    </li>
                    <li>Keep your login details confidential.</li>
                    <li>We may update our terms from time to time.</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <p>
                    Vibezee respects your privacy. Here's how we handle your
                    data:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>We collect necessary info like name and email.</li>
                    <li>
                      We never sell or share your data with third parties.
                    </li>
                    <li>You can request data deletion at any time.</li>
                    <li>We use cookies only to improve your experience.</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="text-right mt-4">
              <button
                onClick={() => setModalContent(null)}
                className="btn btn-sm btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
