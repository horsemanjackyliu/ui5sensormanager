import Controller from "sap/ui/core/mvc/Controller";
import { Route$MatchedEvent } from "sap/ui/core/routing/Route";
import UIComponent from "sap/ui/core/UIComponent";

interface RouteMatchedParameters {
    index: number
}


export default class SensorStatus extends Controller {

    public onInit() {
        (this.getOwnerComponent() as UIComponent).getRouter().getRoute("RouteSensorStatus")?.attachMatched(this.onRouteMatched, this);
    }


    public onRouteMatched(event: Route$MatchedEvent) {
        this.getView()?.bindElement({
            path: "/sensors/" + (event.getParameter("arguments") as RouteMatchedParameters).index,
            model: "sensorModel"
        });
    }


    navToSensors() {
        (this.getOwnerComponent() as UIComponent).getRouter().navTo("RouteSensors");
    }

}