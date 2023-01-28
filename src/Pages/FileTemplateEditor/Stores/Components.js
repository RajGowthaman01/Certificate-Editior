import { writable } from "svelte/store"

import Metadata from "../Modals/Components/Metadata.svelte"
import Filename from "../Modals/Components/Filename.svelte"
import Uploadfile from "../Modals/Components/Uploadfile.svelte"
import Preview from "../Modals/Components/Preview.svelte"
export const activeComponent = writable(Metadata)
