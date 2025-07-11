export const resumeLink = `/${encodeURI("ResumeLogeshwaranN.pdf")}`;
export const isProduction = process.env.NODE_ENV === "production";
export const baseUrl = isProduction ? "https://logeshwarann.info" : "http://localhost:3000";
