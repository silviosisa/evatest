import { types } from "../types/types";
import Swal from 'sweetalert2';
export const startTest = () => {
    return async( dispatch ) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
     const items = await response.json()
     console.log(items);
     Swal.fire('Save', items.title, 'success');
    }
}

export const testDone = () => ({
    type: types.uiTest
})