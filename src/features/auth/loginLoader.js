import { redirect } from "react-router-dom";
import store from "../../store/store";
import { selectUsername } from "./authslice";

export function loader({request}){
    const state=store.getState();
    const userName=selectUsername(state);
    console.log(userName)
    if(userName){
        return redirect('/');
    }
    return new URL(request.url).searchParams.get("redirectTo");
}