import { Box, Grid, Typography,Link } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contact = () => {
  return (
    <>
      <Box
      id="contact"
        sx={{
          minHeight: "500px",
          backgroundImage: "url(https://wallpapercave.com/wp/BMrmUGk.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2, // Padding on small screens
        }}
      >
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={10}
            md={8}
            lg={6}
            sx={{
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: { xs: "20px", md: "40px" }, // Responsive padding
            }}
          >
            {/* Contact Heading */}
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "24px", sm: "32px", md: "50px" },
              }}
            >
              CONTACT <span style={{ color: "violet" }}>Me</span>
              <motion.span
                animate={{
                  rotate: [0, -20, 20, 0], // Tilting left and right
                  scale: [1, 1.2, 1], // Slight pulsing effect
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                }}
                style={{ display: "inline-block", marginLeft: "10px" }}
              >
                <CallIcon
                  sx={{
                    fontSize: { xs: "40px", md: "50px" },
                    color: "violet",
                    filter: "drop-shadow(0 0 10px violet)",
                  }}
                />
              </motion.span>
            </Typography>

            {/* Contact Details */}
            <Grid container spacing={2}  sx={{ marginTop: "20px",justifyContent:"center"}}>
              {/* Phone Number */}
              <Grid
                item
                xs={9.5}
                sm={6.1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                 
                }}
              >
                <CallIcon sx={{ color: "violet", marginRight: "10px" }} />
                <Typography variant="h6" color="white" fontSize={{ xs: "16px", sm: "18px" }}>
                  +91 9677575630
                </Typography>
              </Grid>

              {/* Email */}
              <Grid
                item
                xs={9.5}
                sm={6.1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <EmailIcon sx={{ color: "violet", marginRight: "10px" }} />
                <Link href='mailto:snehajerish@gmail.com' underline="none"  color="white" fontSize={{ xs: "16px", sm: "18px" }}>
                  snehajerish@gmail.com
                  </Link>
              </Grid>
            {/* Linked In */}
              <Grid
                item
                xs={9.5}
                sm={6.1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <LanguageIcon sx={{ color: "violet", marginRight: "10px" }} />
                  <Link href='https://www.linkedin.com/in/sahayasneha' underline="none"  color="white" fontSize={{ xs: "16px", sm: "18px" }}>
                  linkedin.com/in/sahayasneha
                  </Link>
                
              </Grid>
              {/* Github */}
              <Grid
                item
                xs={9.5}
                sm={6.1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <GitHubIcon sx={{ color: "violet", marginRight: "10px" }} />
                <Link href='https://github.com/Sneha0420-svg' underline="none"  color="white" fontSize={{ xs: "16px", sm: "18px" }}>
                github.com/Sneha0420-svg
                  </Link>
              </Grid>

              {/* Location */}
              <Grid
                item
                xs={9.5}
                sm={6.1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <LocationOnIcon sx={{ color: "violet", marginRight: "10px" }} />
                <Typography variant="h6" color="white" fontSize={{ xs: "16px", sm: "18px" }}>
                  Tirunelveli, India
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
