import { useContext } from "react";

import { EditorContext } from "../contexts/EditorContext.js";
import { reactKeysPluginKey } from "../plugins/reactKeys.js";

export function useReactKeys(): any {
  const { view } = useContext(EditorContext);
  return view && reactKeysPluginKey.getState(view.state);
}
