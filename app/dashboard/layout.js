import Navbar from "../components/dashboardComponents/navbar/navbar";
import Sidebar from "../components/dashboardComponents/sidebar/sidebar";
import styles from "../components/dashboardComponents/dashboard.module.css";

const DashboardLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebarMenu}>
                <Sidebar />
            </div>
            <div className={styles.contentSection}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;