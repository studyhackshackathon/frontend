import SideBar from '../../components/sidebar'

export default function DashboardLayout({ children }) {
    return (
        <SideBar 
            bgColor={'#D5C6E0'}
        >
            {children}
        </SideBar>
    )
}