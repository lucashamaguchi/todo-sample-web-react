import * as types from "../types";
import axios from "axios";

const todosApi = axios.create({
    baseURL: process.env.REACT_APP_TODOS_API_REST
});

const httpResource = "todos";

const initialState = {
  [types.TODO_LIST]: [],
};

export const actions = {
  [types.TODO_LIST]: () => {
    return async (dispatch: any) => {
      const response = await todosApi.get(`/${httpResource}`);
      const results = response.data.results;
      dispatch({ type: types.TODO_LIST, value: results });
      return response;
    }
  },
  [types.TODO_CREATE]: (payload: any) => {
    return async (dispatch: any) => {
      const response = await todosApi.post(`/${httpResource}`, payload);
      return response;
    }
  },
  [types.TODO_UPDATE]: ({ id, payload }: { id: string, payload: any }) => {
    return async (dispatch: any) => {
        const response = await todosApi.patch(`/${httpResource}/${id}`, payload);
        return response;
    }
  },
  [types.TODO_DELETE]: ({ id }: { id: string }) => {
    return async (dispatch: any) => {
      const response = await todosApi.delete(`/${httpResource}/${id}`);
      return response;
    }
  },
};

export default actions;
export {
  initialState
}
