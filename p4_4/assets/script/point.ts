import { _decorator, Component, Node, Vec3, Enum } from "cc";
const { ccclass, property } = _decorator;

enum ROUND_POINT_TYPE {
    NORMAL = 1,
    START,
    GREETING,
    GOODBYE,
    END,
    AI_START,
}
Enum(ROUND_POINT_TYPE);

enum ROAD_MOVE_TYPE {
    LINE = 1,
    CURVE,
}
Enum(ROAD_MOVE_TYPE);


@ccclass("point")
export class point extends Component {
    @property({
        type: ROUND_POINT_TYPE,
        displayOrder: 1,
    })
    type = ROUND_POINT_TYPE;

    @property({
        type: Node,
        displayOrder: 2,
        visible: function (this: point) {
            // return this.type !== ROUND_POINT_TYPE.END;
            return false;
        }
    })
    nextStation: Node = null;

    @property({
        type: ROAD_MOVE_TYPE,
        displayOrder: 3,
    })
    moveType = ROAD_MOVE_TYPE;

    @property(
        {
            displayOrder: 4,
        }
    )
    closeWise = true;

    @property({
        type: Vec3,
        displayOrder: 5,
    })
    direction = new Vec3(1, 0, 0);

    @property({
        displayOrder: 5,
    })
    interval = 3;

    @property({
        displayOrder: 6,
    })
    delayTime = 0;

    @property({
        displayOrder: 7,
    })
    speed = 0.05;

    @property({
        displayOrder: 8,
    })
    cars = "a";





    start() {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
