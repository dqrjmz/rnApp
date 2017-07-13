package com.rntest;

import com.facebook.react.ReactActivity;

import cn.mandata.react_native_mpchart.MPChartPackage; 

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "rnTest";
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MPChartPackage()
        );
    }
}
