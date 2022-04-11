new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
          {
            name: "Yo Yo Honey Singh",
            artist: "Brown Rang",
            cover: "https://a10.gaanacdn.com/gn_img/albums/9En3pqeWXD/En3pey9eWX/size_l.jpg",
            source: "C:\Users\Anunay Kashyap\Desktop\music player\music",
            url: "https://youtu.be/PqFMFVcCZgI",
            favorited: false
          },
          {
            name: "Rag'n'Bone Man",
            artist: "Human",
            cover: "https://upload.wikimedia.org/wikipedia/en/a/a8/Human_-_Rag%27n%27Bone_Man_Single.png",
            source: "https://github.com/AnunayKashyap/Music-Player/blob/main/mp3_9.mp3",
            url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
            favorited: false
          },
          {
            name: "Sanam",
            artist: "Gulabi Aankhen",
            cover: "https://i.ytimg.com/vi/hgi2MYAFgE8/maxresdefault.jpg",
            source: "https://github.com/AnunayKashyap/Music-Player/blob/main/mp3_9.mp3",
            url: "https://youtu.be/hgi2MYAFgE8",
            favorited: false
          },
          {
            name: "Rahat Fateh Ali Khan",
            artist: "Afreen Afreen",
            cover: "https://i.scdn.co/image/ab67616d0000b273d861c32b8ed7a82c06d10182",
            source: "https://github.com/AnunayKashyap/Music-Player/blob/main/mp3_9.mp3",
            url: "https://youtu.be/kw4tT7SCmaY",
            favorited: false
          },
          {
            name: "KK",
            artist: "Ajab Si",
            cover: "https://i.scdn.co/image/ab67616d0000b273675b3f7dea80153c73581e5e",
            source: "https://github.com/AnunayKashyap/Music-Player/blob/main/mp3_9.mp3",
            url: "https://youtu.be/hgi2MYAFgE8",
            favorited: false
          },
          {
            name: "Arjit Singh",
            artist: "Raakh",
            cover: "https://i.scdn.co/image/ab67616d0000b27334c0fa4f40062d2c73ccca30",
            source: "https://github.com/AnunayKashyap/Music-Player/blob/main/mp3_9.mp3",
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMm61s_GzerM&psig=AOvVaw3m0qk2yrWe9ZMHlhzWIYej&ust=1649762493585000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLCpi7Hyi_cCFQAAAAAdAAAAABAD",
            favorited: false
          },
          {
            name: "Mahtim Shakib",
            artist: "Taakey Olpo Kachhe Dakchii",
            cover: "https://images.hungama.com/c/1/465/62f/61253206/61253206_300x300.jpg",
            source: "https://github.com/AnunayKashyap/Music-Player/blob/main/mp3_9.mp3",
            url: "https://youtu.be/sEvcn5uTWX0",
            favorited: false
          },
          {
            name: "Arjit Singh",
            artist: "Tomake Chai",
            cover: "https://i.scdn.co/image/ab67616d0000b273dddf752d4f44de75d45429a6",
            source: "https://github.com/AnunayKashyap/Music-Player/blob/main/mp3_9.mp3",
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3mW_-8jGOMs&psig=AOvVaw1ZAYmErOpYsHvlMi4z-hfT&ust=1649763153443000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPC32Or0i_cCFQAAAAAdAAAAABAK",
            favorited: false
          },
          {
            name: "ED Sheeran",
            artist: "Bad Habits",
            cover: "https://upload.wikimedia.org/wikipedia/en/2/2e/Ed_Sheeran_-_Bad_Habits_2.png",
            source: "https://github.com/AnunayKashyap/Music-Player/blob/main/mp3_9.mp3",
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBms39BUQBFw&psig=AOvVaw3jAMJkawFTpqJjhWqJp65a&ust=1649762172508000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPCU2pXxi_cCFQAAAAAdAAAAABAI",
            favorited: false
          },
          {
            name: "Sean Paul,Dua Lipa",
            artist: "No Lie",
            cover: "https://i1.sndcdn.com/artworks-000212816587-3pxa7y-t500x500.jpg",
            source: "https://github.com/AnunayKashyap/Music-Player/blob/main/mp3_9.mp3",
            url: "https://youtu.be/GzU8KqOY8YA",
            favorited: false
          },
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });