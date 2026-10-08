import { useState } from 'react'
import './practice.css'

function Practice() {
  const [mode, setMode] = useState('login')

  const isSignup = mode === 'signup'
  const isReset = mode === 'reset'

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="practice-page">
      <section className="practice-card" aria-labelledby="practice-title">
        <h1 id="practice-title">
          {isReset ? 'Reset Password' : isSignup ? 'Signup Form' : 'Login Form'}
        </h1>

        {!isReset && (
          <div className="practice-tabs" role="tablist" aria-label="Account type">
            <button
              className={`practice-tab${!isSignup ? ' is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={!isSignup}
              onClick={() => setMode('login')}
            >
              Login
            </button>
            <button
              className={`practice-tab${isSignup ? ' is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={isSignup}
              onClick={() => setMode('signup')}
            >
              Signup
            </button>
          </div>
        )}

        <form className="practice-form" onSubmit={handleSubmit}>
          <label className="practice-visually-hidden" htmlFor="practice-email">
            Email Address
          </label>
          <input
            id="practice-email"
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            required
          />

          {!isReset && (
            <>
              <label className="practice-visually-hidden" htmlFor="practice-password">
                Password
              </label>
              <input
                id="practice-password"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete={isSignup ? 'new-password' : 'current-password'}
                required
              />
            </>
          )}

          {isSignup && (
            <>
              <label className="practice-visually-hidden" htmlFor="practice-confirm-password">
                Confirm Password
              </label>
              <input
                id="practice-confirm-password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="new-password"
                required
              />
            </>
          )}

          {!isSignup && !isReset && (
            <button
              className="practice-text-button practice-forgot"
              type="button"
              onClick={() => setMode('reset')}
            >
              Forgot password?
            </button>
          )}

          <button className="practice-submit" type="submit">
            {isReset ? 'Send reset link' : isSignup ? 'Signup' : 'Login'}
          </button>
        </form>

        <p className="practice-switch">
          {isReset ? (
            <>
              Remembered your password?{' '}
              <button
                className="practice-text-button"
                type="button"
                onClick={() => setMode('login')}
              >
                Login
              </button>
            </>
          ) : isSignup ? (
            <>
              Already a member?{' '}
              <button
                className="practice-text-button"
                type="button"
                onClick={() => setMode('login')}
              >
                Login now
              </button>
            </>
          ) : (
            <>
              Not a member?{' '}
              <button
                className="practice-text-button"
                type="button"
                onClick={() => setMode('signup')}
              >
                Signup now
              </button>
            </>
          )}
        </p>
      </section>
    </main>
  )
}

export default Practice
