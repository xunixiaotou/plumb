import Plumb from "./src/Plumb";

let sources = document.getElementsByClassName("window");

window.plumb = new Plumb(sources, {
    marker: "ARROW",
    lineDashType: "SOLID",
    lineType: "FLOW",
    strokeWidth: 2,
    padding: 20,
    useGuideLine: true,
    useGrid: true
});

plumb.getSources().forEach(function(source) {
    plumb.addEndPoint(source, {
        uuid: `${source.getElement().id}-left`,
        anchor: "left",
        size: 18
    });

    plumb.addEndPoint(source, {
        uuid: `${source.getElement().id}-right`,
        anchor: "right",
        size: 18
    });
}, this);

plumb.on("connected", function(evt) {
    console.log(evt);
});
