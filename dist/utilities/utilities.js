export const updateCart = (course) => {
    let courses = JSON.parse(localStorage.getItem('cart')) ?? [];
    courses.push(course);
    localStorage.setItem('cart', JSON.stringify(courses));
    courses = JSON.parse(localStorage.getItem('cart'));
    document.querySelector('#cartItem').textContent = courses.length.toString();
};
export const getCartItems = () => {
    const courses = JSON.parse(localStorage.getItem('cart')) ?? [];
    return courses;
};
export const UpdateCartItems = () => {
    const courses = JSON.parse(localStorage.getItem('cart'));
    if (courses) {
        document.querySelector('cartItem').textContent = courses.length.toString();
    }
};
