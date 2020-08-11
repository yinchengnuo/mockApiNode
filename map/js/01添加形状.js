define(["Cesium", "init"], function (Cesium, init) {
    console.log(Cesium)
    const viewer = init()

    var redBox = viewer.entities.add({
        name: 'Red box with black outline',
        position: Cesium.Cartesian3.fromDegrees(113.76802672360228, 34.75958858038169, 0),
        box: {
            dimensions: new Cesium.Cartesian3(100.0, 100.0, 100.0),
            material: Cesium.Color.RED.withAlpha(0.1),
            outline: true,
            outlineColor: Cesium.Color.BLUE
        }
    });

    viewer.zoomTo(viewer.entities);
});