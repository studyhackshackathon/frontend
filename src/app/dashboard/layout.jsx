import SideBar from '../../components/sidebar'

export default function DashboardLayout({ children }) {
    return (
        <SideBar 
            bgColor={'#D5C6E0'} 
            h='100vh'
        >
            {children}
        </SideBar>
    )
}