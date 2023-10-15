'use client'
import { Suspense} from 'react'
import SideBar from '../../components/sidebar'
import Loading from './loading';

export default function DashboardLayout({ children }) {
    return (
        <SideBar 
            bgColor={'#D5C6E0'}
        >
            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
        </SideBar>
    )
}