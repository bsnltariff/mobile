  document.getElementById('linkForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const driveLink = document.getElementById('driveLink').value;
            const fileId = driveLink.split('/d/')[1].split('/')[0]; // Extract file ID
            const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`; // Create direct link
            
            document.getElementById('directLink').innerText = directLink; // Display the direct link
            
            // Enable copy button
            document.getElementById('copyBtn').style.display = 'block';
        });
        
        // Copy direct link to clipboard
        document.getElementById('copyBtn').addEventListener('click', function() {
            const directLink = document.getElementById('directLink').innerText;
            navigator.clipboard.writeText(directLink);
            alert('Direct link copied to clipboard!');
        });