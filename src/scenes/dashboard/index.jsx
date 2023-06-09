import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../Data/Data";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            className="px-2 py-5 text-2xl font-bold"
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* This is where the First row starts*/}

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
        <Box
          className="flex items-center justify-center py-4"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                className="text-2xl"
                sx={{ color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        <Box
          className="flex items-center justify-center py-4"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                className="text-2xl"
                sx={{ color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        <Box
          className="flex items-center justify-center py-4"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                className="text-2xl"
                sx={{ color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        <Box
          className="flex items-center justify-center py-4"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                className="text-2xl"
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>

      {/* This is the first row ends */}

      {/* The second row starts here */}
      <Box className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Box backgroundColor={colors.primary[400]}>
          <Box backgroundColor={colors.primary[400]}>
            <Link to="/line">
              <Box className="flex justify-between items-center mt-6 px-7">
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Revenue Generated
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color={colors.greenAccent[500]}
                  >
                    $59,342.32
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                  </IconButton>
                </Box>
              </Box>

              <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard={true} />
              </Box>
            </Link>
          </Box>
        </Box>
        <Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
            className="h-80"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <Box>
          <Box className="p-[34px]" backgroundColor={colors.primary[400]}>
            <Typography variant="h5" fontWeight="600">
              Campaign
            </Typography>
            <Box className="flex flex-col items-center mt-6">
              <ProgressCircle size="125" />
              <Typography
                className="mt-4"
                variant="h5"
                color={colors.greenAccent[500]}
              >
                $48,352 revenue generated
              </Typography>
              <Typography>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Link to="/bar">
            <Box backgroundColor={colors.primary[400]}>
              <Typography className="font-[600] px-7 pt-7" variant="h5">
                Sales Quantity
              </Typography>
              <Box height="250px" mt="-20px">
                <BarChart isDashboard={true} />
              </Box>
            </Box>
          </Link>
        </Box>
        <Box>
          <Link to="/geography">
            <Box className="p-7" backgroundColor={colors.primary[400]}>
              <Typography className="font-[600] mb-4" variant="h5">
                Geography Based Traffic
              </Typography>
              <Box height="200px">
                <GeographyChart isDashboard={true} />
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
