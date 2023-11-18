import {
  DOWN,
  INCREASE_SNAKE,
  DECREMENT_SCORE,
  INCREMENT_SCORE,
  INCREMENT_OPP_SCORE,
  DECREMENT_OPP_SCORE,
  UPDATE_OPP_SCORE,
  ISnakeCoord,
  LEFT,
  RESET,
  RESET_SCORE,
  RIGHT,
  SET_DIS_DIRECTION,
  UP,
  DECREMENT_TIME
} from "../actions";

export interface IGlobalState {
  snake: ISnakeCoord[] | [];
  disallowedDirection: string;
  score: number;
  oppScore: number;
  timeLeft: number;
}


const globalState: IGlobalState = {
  snake: [
    { x: 580, y: 300 },
    { x: 560, y: 300 },
    { x: 540, y: 300 },
    { x: 520, y: 300 },
    { x: 500, y: 300 },
  ],
  disallowedDirection: "",
  score: 0,
  oppScore: 0,
  timeLeft: 120,
};
const gameReducer = (state = globalState, action: any) => {
  switch (action.type) {
    case RIGHT:
    case LEFT:
    case UP:
    case DOWN: {
      let newSnake = [...state.snake];
      newSnake = [{
        x: state.snake[0].x + action.payload[0],
        y: state.snake[0].y + action.payload[1],
      }, ...newSnake];
      newSnake.pop();

      return {
        ...state,
        snake: newSnake,
      };
    }
    case DECREMENT_TIME: {
      return {
        ...state,
        timeLeft: state.timeLeft - 1
      };
    }

    case SET_DIS_DIRECTION:
      return { ...state, disallowedDirection: action.payload };

    case RESET:
      return {
        ...state,
        snake: [
          { x: 580, y: 300 },
          { x: 560, y: 300 },
          { x: 540, y: 300 },
          { x: 520, y: 300 },
          { x: 500, y: 300 },
        ],
        disallowedDirection: ""
      };

    case INCREASE_SNAKE:
      const snakeLen = state.snake.length;
      return {
        ...state,
        snake: [
          ...state.snake,
          {
            x: state.snake[snakeLen - 1].x - 20,
            y: state.snake[snakeLen - 1].y - 20,
          },
        ],
      };

    case RESET_SCORE:
      return { ...state, score: 0 };

    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case DECREMENT_SCORE:
      return {
        ...state,
        score: state.score - 1,
      };

    case INCREMENT_OPP_SCORE:
      return {
        ...state,
        score: state.oppScore + 1,
      };
    case DECREMENT_OPP_SCORE:
      return {
        ...state,
        score: state.oppScore - 1,
      };

    case UPDATE_OPP_SCORE:
      return {
        ...state,
        oppScore: action.payload,
      }

    default:
      return state;
  }
};



export default gameReducer;