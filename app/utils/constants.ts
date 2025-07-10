export const resumeLink = `/${encodeURI("Resume_LogeshwaranN.pdf")}`;
export const isProduction = process.env.NODE_ENV === "production";
export const baseUrl = isProduction ? "https://ivanstepanian.com" : "http://localhost:3000";
