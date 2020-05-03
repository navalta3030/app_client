import { setJWT } from "_utils/JwtHandler";
import History from "_utils/History";
import { Login } from "action/AccountAction";
/**
 * Dummy login action to be performed when under development
 */
const LogInDev = (dispatch: any): void => {
  setJWT(
    "eyJhbGciOiJIUzI1NiIsImtpZCI6InNpbTIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJodHRwOi8veHJheS5tYXJrbmF2YWx0YS5jb20iLCJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTU4ODM2NTYzNjg0NywiaXNzIjoiaHR0cHM6Ly94cmF5Lm1hcmtuYXZhbHRhLmNvbSIsImp0aSI6Im1uYjIzdmNzcnQ3NTZ5dWlvbW5idmN4OThlcnR5dWlvcCIsIm5hbWUiOiJkdW1teSIsInN1YiI6ImluZm9ybWF0aW9uIn0.BmCnyKv6eMGNaTUS2DAdDK4trq_0LKNSuOLF7hwW2mE"
  );
  dispatch(
    Login({
      name: "dev",
      email: "dev",
      data: "test_data",
      isAuthenticated: true
    })
  );
  History.push("/upload");
};

export default LogInDev;
