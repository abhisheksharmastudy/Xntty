document.addEventListener('DOMContentLoaded', function() {

    // --- Form Submission Simulation ---
    // We prevent actual submission and just log a message
    // In a real app, this would send data to a server (backend)

    const findRideForm = document.getElementById('find-ride-form');
    const offerRideForm = document.getElementById('offer-ride-form');
    const rideResultsSection = document.getElementById('ride-results-section');
    const rideList = document.querySelector('.ride-list');
    const noResultsMessage = document.querySelector('.no-results');

    if (findRideForm) {
        findRideForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from submitting the traditional way
            console.log('Finding rides with criteria:', {
                origin: document.getElementById('find-origin').value,
                destination: document.getElementById('find-destination').value,
                date: document.getElementById('find-date').value
            });

            // --- Simple Simulation: Show/Hide Results ---
            // In a real app, you'd fetch data based on the form input
            // Here, we'll just randomly decide whether to show the static results or "no results"

            if (rideList && noResultsMessage) {
                 if (Math.random() > 0.3) { // Simulate finding results most of the time
                     rideList.style.display = 'flex'; // Or 'block' if you prefer
                     noResultsMessage.style.display = 'none';
                     rideResultsSection.style.display = 'block'; // Make sure section is visible
                     console.log("Simulating: Rides found.");
                 } else {
                     rideList.style.display = 'none';
                     noResultsMessage.style.display = 'block';
                     rideResultsSection.style.display = 'block'; // Make sure section is visible
                     console.log("Simulating: No rides found.");
                 }
            } else {
                 console.error("Could not find ride list or no results message elements.");
            }

             // Optionally, scroll to results
             if(rideResultsSection) {
                 rideResultsSection.scrollIntoView({ behavior: 'smooth' });
             }
        });
    }

    if (offerRideForm) {
        offerRideForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop form submission
             const formData = new FormData(offerRideForm);
             const data = Object.fromEntries(formData.entries()); // Get form data as an object
            console.log('Offering ride with details:', data);

            // Provide user feedback (simple alert for now)
            alert('Ride offer submitted successfully! (Simulation)');

            // Optionally, clear the form or redirect (in a real app)
             // offerRideForm.reset();
             // window.location.href = 'index.html'; // Redirect back home
        });
    }

     // --- Add basic interactivity for ride card buttons ---
     const viewDetailsButtons = document.querySelectorAll('.ride-card .button-secondary');
     viewDetailsButtons.forEach(button => {
         button.addEventListener('click', function() {
             // In a real app, this would show more details or lead to a booking page
             alert('Showing ride details... (Simulation)');
             console.log('View Details clicked for a ride card.');
         });
     });


    console.log("CommuteShare script loaded.");
});