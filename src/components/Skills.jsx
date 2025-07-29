import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const Skills = () => {
  const skillCategories = {
    "Frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "MUI", "Bootstrap"],
    "Backend": ["Python", "FastAPI"],
    "Database": ["MySQL"], // Add your DB here when ready (e.g., PostgreSQL, MongoDB)
    "Deployment / Tools": ["Docker", "AWS (Deployment)", "Render", "GitHub"]
  };

  return (
    <Box 
      id="skills"
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <Grid
        container
        sx={{ minHeight: "100vh", p: 2 }}
        justifyContent="center"
        alignItems="center"
      >
        {/* Image Grid */}
        {/* <Grid
          item
          lg={6}
          md={6}
          sm={10}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
            alt="not found"
            style={{ width: "80%", maxWidth: "400px" }}
          />
        </Grid> */}

        {/* Skills Grid */}
        <Grid item lg={11} md={11} sm={12} xs={12} textAlign="center">
          <Typography variant="h4" color="white" my={5}>
            Professional <span style={{ color: "violet" }}>Skillset</span>
          </Typography>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <Box key={category} sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                color="violet"
                mb={2}
                textAlign="center"
                sx={{ textDecoration: "underline" }}
              >
                {category}
              </Typography>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                {skills.map((skill, index) => (
                  <Grid
                    key={index}
                    item
                    lg={2}
                    md={5}
                    sm={5}
                    xs={6}
                    sx={{
                      height: "90px",
                      border: "2px solid violet",
                      borderRadius: "20px",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease-in-out",
                      cursor: "pointer",
                      mx: 1,
                      my: 2,

                      "&:hover": {
                        transform: "scale(1.1)",
                        borderColor: "white",
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="white"
                      
                    >
                      {skill}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
