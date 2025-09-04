## used env (An environment variable is a config value stored outside your code that your app can read.)
Portability → run the same app on your laptop, AWS, Heroku, etc. without changing code.

Security → don’t hardcode secrets like DB passwords or API keys in your code.


# added monogoose morgan

# bcrypt is a library for hashing passwords.

Hashing = turning your password into a scrambled string so it’s safe to store in the database.

# react-router-dom


# SEO using react-helmet

# Axios(client server connection)
#  toastify (app notification )
# concurrently(run backend amd frontend with same cmd)
# cors(prevents connection issues between frontend and backend since its running on two differnet ports)


## contextAPI/ global state/ props / react-redux




#Your useEffect depends on [auth], so every time auth changes, the effect runs.

Inside the effect, you call setAuth, which changes auth.

Because auth changed, the effect runs again.

This creates an infinite loop of updates and re-renders, causing the "Maximum update depth exceeded" error.
# fix -How to fix it?

The fix is to run the effect only once on mount, so it loads the data from localStorage a single time and does not keep running endlessly.

You do that by using an empty dependency array [], like this:

## private route