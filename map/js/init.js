let map;

define(["token"], function (Cesium) {
    return function() {
        return map ? map : map = new Cesium.Viewer("map", {
            geocoder: false,
            timeline: false,
            vrButton: false,
            animation: false,
            homeButton: false,
            sceneModePicker: false,
            baseLayerPicker: false,
            fullscreenButton: false,
            navigationHelpButton: false,
        })
    };
});
