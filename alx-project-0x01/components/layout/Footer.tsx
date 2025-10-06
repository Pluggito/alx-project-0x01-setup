import React from "react";

const Footer: React.FC = () => (
  <footer style={{ textAlign: "center", padding: "1rem 0", background: "#f5f5f5" }}>
    <small>&copy; {new Date().getFullYear()} ALX Project 2. All rights reserved.</small>
  </footer>
);

export default Footer;