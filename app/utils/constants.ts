export const resumeLink = `/${encodeURI("Resume_LogeshwaranN.pdf")}`;
export const isProduction = process.env.NODE_ENV === "production";
export const baseUrl = isProduction ? "https://logeshwarann.info" : "http://localhost:3000";
