// Data lagu kamu (ganti dengan lagu-lagu favoritmu)
const playlists = [
    {
        id: 1,
        title: "Pop Hits 2024 🔥",
        songs: [
            "Taylor Swift - Anti-Hero",
            "Olivia Rodrigo - vampire",
            "Sabrina Carpenter - Espresso",
            "Billie Eilish - BIRDS OF A FEATHER",
            "Dua Lipa - Illusion"
        ]
    },
    {
        id: 2,
        title: "Chill Vibes 🌙",
        songs: [
            "The Weeknd - Blinding Lights",
            "Tate McRae - greedy",
            "SZA - Snooze",
            "Doja Cat - Paint The Town Red",
            "Post Malone - I Had Some Help"
        ]
    },
    {
        id: 3,
        title: "Workout Playlist 💪",
        songs: [
            "Jack Harlow - Lovin On Me",
            "Metro Boomin - Creepin'",
            "Drake - First Person Shooter",
            "Travis Scott - FE!N",
            "Playboi Carti - All Red"
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Load playlist
    loadPlaylists();
    
    // Navbar mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function loadPlaylists() {
    const playlistGrid = document.getElementById('playlistGrid');
    
    playlists.forEach(playlist => {
        const playlistCard = document.createElement('div');
        playlistCard.className = 'playlist-card';
        playlistCard.innerHTML = `
            <h3>${playlist.title}</h3>
            <div class="songs-count">${playlist.songs.length} lagu</div>
            <div class="songs-list">
                ${playlist.songs.slice(0, 3).map(song => `
                    <div class="song-item">
                        <span class="song-title">${song}</span>
                        <button class="play-btn" onclick="playSong('${song}')">▶</button>
                    </div>
                `).join('')}
                ${playlist.songs.length > 3 ? `<div class="song-item"><span class="song-title">+${playlist.songs.length - 3} lagu lainnya</span></div>` : ''}
            </div>
        `;
        playlistGrid.appendChild(playlistCard);
    });
}

function playSong(songName) {
    // Di sini kamu bisa integrasikan dengan Spotify API atau audio player
    alert(`Memutar: ${songName}\n\nCatatan: Integrasikan dengan Spotify Web API untuk pemutaran nyata!`);
}
