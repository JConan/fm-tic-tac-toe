import { writable } from "svelte/store";

export function CreateBoard() {
    let board = writable(Array<string>(9).fill(''))

    return board;
}