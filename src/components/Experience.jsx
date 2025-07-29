import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";

export const Experience = () => {
  const experiences = [
    {
      title: "Frontend Development (Course)",
      company: "Karka Academy",
      period: "Jan 2024 – June 2024",
      description: [
        "Completed hands-on training in frontend technologies including HTML, CSS, JavaScript, and React.",
        "Built multiple responsive UI components and practiced real-world project structures.",
        "Gained exposure to Git, version control practices, and working in a collaborative dev environment.",
      ],
    },
     {
      title: "Guesthouse Management Project",
      company: "Agile Tribers",
      
      description: [
        "Focused on frontend development using React and JavaScript.",
        "Designed UI for room listings, booking forms, and guest interaction.",
        "Currently working on API integration and database connectivity.",
      ],
    },
    {
      title: "Trademitra-AI Project",
      company: "Bull Pilot Techologies Pvt Ltd",
      
      description: [
        "Worked on the frontend and user experience using React, TypeScript, and MUI.",
        "Integrated FastAPIs and managed database design for smooth user interaction.",
        
      ],
    },
   
  ];

  return (
    <Box id="experience" sx={{ width: "100%", py: 6, px: 3 }}>
      <Typography variant="h4" color="white" textAlign="center" mb={4}>
        <span style={{ color: "violet" }}>Experience</span> & Projects
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid violet",
                borderRadius: 3,
                p: 3,
                mb: 4,
              }}
            >
              <Typography variant="h6" color="violet">
                {exp.title} — <span style={{ color: "white" }}>{exp.company}</span>
              </Typography>
              <Typography variant="body2" color="gray" mb={1}>
                {exp.period}
              </Typography>
              <ul style={{ paddingLeft: "20px", color: "white" }}>
                {exp.description.map((point, idx) => (
                  <li key={idx} style={{ marginBottom: "8px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
