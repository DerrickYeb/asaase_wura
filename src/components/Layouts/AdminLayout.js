import React, {useEffect} from 'react'
import {bindActionCreators} from "redux"

import {Button} from 'react-bootstrap'
//header
//subheader
// import SubHeader from '../../components/partials/dashboard/HeaderStyle/sub-header'
//sidebar
//footer
//default 

// import SettingOffcanvas from '../../components/partials/components/settingoffcanvas'

// store
import {NavbarstyleAction, getDirMode, getcustomizerMode, getcustomizerprimaryMode, getcustomizerinfoMode,  SchemeDirAction, ColorCustomizerAction,  getNavbarStyleMode, getSidebarActiveMode, SidebarActiveStyleAction, getDarkMode, ModeAction,  SidebarColorAction, getSidebarColorMode, getSidebarTypeMode} from '../../store/setting/setting'
import {connect} from "react-redux"
import Loader from '../loader'
import Sidebar from '../SidebarLayout/sidebar'
import Settingoffcanvas from '../settingoffcanvas'
import Header from '../SidebarLayout/dashboard/header'

const mapStateToProps = (state) => {
    return {
        darkMode: getDarkMode(state),
        customizerMode: getcustomizerMode(state),
        cololrinfomode: getcustomizerinfoMode(state),
        colorprimarymode: getcustomizerprimaryMode(state),
        schemeDirMode: getDirMode(state),
        sidebarcolorMode: getSidebarColorMode(state),
        sidebarTypeMode: getSidebarTypeMode(state),
        sidebaractivestyleMode: getSidebarActiveMode(state),
        navbarstylemode: getNavbarStyleMode(state),
    };
}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            ModeAction,
            SchemeDirAction,
            SidebarColorAction,
            SidebarActiveStyleAction,
            NavbarstyleAction,
            ColorCustomizerAction,
        },
        dispatch
    )
})

const Default = ({children}) => {
    // const {children, ModeAction,darkMode, schemeDirMode, sidebarcolorMode, sidebarTypeMode, sidebaractivestyleMode, navbarstylemode, customizerMode, cololrinfomode, colorprimarymode} = props;
    // useEffect(() => {
    //     //   darkmode
    //     const colorMode = sessionStorage.getItem('color-mode');
    //     if(colorMode===null){
    //         ModeAction(darkMode);
    //     }
    //     else{
    //         ModeAction(colorMode);
    //     }

    //     // colocustomizermode
    //     const colorcustomizerMode = sessionStorage.getItem('color-customizer-mode');
    //     const colorcustomizerinfoMode = sessionStorage.getItem('colorcustominfo-mode');
    //     const colorcustomizerprimaryMode = sessionStorage.getItem('colorcustomprimary-mode');
    //     if(colorcustomizerMode===null){
    //         props.ColorCustomizerAction(props.customizerMode, props.cololrinfomode, props.colorprimarymode);
    //         document.documentElement.style.setProperty('--bs-info', props.cololrinfomode );
    //     }
    //     else{
    //         props.ColorCustomizerAction(colorcustomizerMode, colorcustomizerinfoMode, colorcustomizerprimaryMode);
    //         document.documentElement.style.setProperty('--bs-info', colorcustomizerinfoMode);
    //     }

    //     // rtlmode
    //     const rtlMode = sessionStorage.getItem('rtl-mode');
    //     if(rtlMode===null){
    //         props.SchemeDirAction(props.schemeDirMode)
    //     }
    //     else{
    //         props.SchemeDirAction(rtlMode);
    //     }   
    //     })
   
    return (
        <>
            <Loader/>
            <Sidebar />
                <main className="main-content">
                    <div className="position-relative">
                        <Header />
                        {/* use it for tenants */}
                        {/* <SubHeader /> */}
                    </div>
                    {/* <div className="py-0 conatiner-fluid content-inner mt-n5"> */}
                        {/* <DefaultRouter /> */}
                        {children}
                    {/* </div> */}
                </main>
            {/* <Settingoffcanvas  /> */}
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Default)
