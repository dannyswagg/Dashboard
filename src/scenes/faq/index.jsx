import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { ExpandMore } from "@mui/icons-material";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is an admin dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An admin dashboard is a web-based interface that allows
            administrators to manage and monitor various aspects of their
            website or application. It provides an easy way to view data,
            analyze metrics, and perform administrative tasks.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I access the admin dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To access the admin dashboard, you will need to log in to your
            account with your username and password. Once you are logged in, you
            should see a link to the dashboard in the main navigation menu.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What features are available in the admin dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The features available in the admin dashboard depend on the specific
            website or application you are using. However, some common features
            include user management, content management, analytics, and
            settings/configuration.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I add new users to the system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To add a new user to the system, navigate to the user management
            section of the admin dashboard and click the "Add User" button. You
            will then be prompted to enter the new user's information, such as
            their name, email address, and role.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I customize the look and feel of the admin dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, many admin dashboards allow you to customize the layout, color
            scheme, and other visual elements to match your branding or
            preferences. Look for a "Customize" or "Appearance" section in the
            dashboard settings.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
