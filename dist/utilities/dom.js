export const createOverlay = (background) => {
    const overlayDiv = document.createElement('div');
    overlayDiv.style.backgroundImage = background
        ? `url('/src/assets/images/${background}')`
        : '';
    overlayDiv.style.backgroundSize = 'cover';
    overlayDiv.style.backgroundPosition = 'center';
    overlayDiv.style.backgroundRepeat = 'no-repeat';
    overlayDiv.style.height = '100vh';
    overlayDiv.style.width = '100vw';
    overlayDiv.style.position = 'absolute';
    overlayDiv.style.top = '0';
    overlayDiv.style.left = '0';
    overlayDiv.style.zIndex = '-1';
    overlayDiv.style.opacity = '0.3';
    return overlayDiv;
};
export const createCourseDetailsDisplay = (course) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="details-top">
        <div>
          ${course.image
        ? `<img src="/src/assets/images/${course.image}" alt="${course.coursName}"/>`
        : ''}
        </div>
        <div class="info">
          <h2>${course.coursName}</h2>
          <p>
            <i class="fas fa-star rating"></i>
            ${course.popular.toString()}
          </p>
          <p>Klassrum: ${course.classRoom.toString()}<p/>
          <p>Distans: ${course.distans.toString()}<p/>
          <p>Kursstart: ${course.startDate}</p>
          <p>Hur många dagar: ${course.duration}</p>
        </div>
      </div>
    `;
    return div;
};
