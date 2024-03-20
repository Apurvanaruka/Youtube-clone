var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export function generateName() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
};

export const NewLine = ({ text, seeMore }) => {
  const linesList = text?.split('\n')
  if(seeMore){
    return linesList?.map((line, index) => <p key={index}>{line}</p>);
  }else{
    return linesList?.slice(0,3)?.map((line, index) => <p key={index}>{line}</p>);
  }
}


export function convertMillionToK(number) {
  if (number >= 1000000) {
    return Math.round((number / 1000000) * 10) / 10 + "M";
  } else if (number >= 1000) {
    return Math.round(number / 1000) + "K";
  } else {
    return number;
  }
}

export function timeAgo(timestamp) {
  const currentDate = new Date();
  const previousDate = new Date(timestamp);
  const seconds = Math.floor((currentDate - previousDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return years === 1 ? '1 year ago' : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? '1 month ago' : `${months} months ago`;
  } else if (days > 7) {
    return days === 7 ? '1 week ago' : `${days % 7} weeks ago`;
  } else if (days > 0) {
    return days === 1 ? '1 day ago' : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  } else {
    return 'Just now';
  }
}

export function convert_time(youtubeTime) {
  const match = youtubeTime?.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  if (!match) {
    return "Invalid time format";
  }

  const hours = parseInt(match[1] ? match[1].slice(0, -1) : 0, 10);
  const minutes = parseInt(match[2] ? match[2].slice(0, -1) : 0, 10);
  const seconds = parseInt(match[3] ? match[3].slice(0, -1) : 0, 10);

  const hoursString = hours > 0 ? hours.toString() : "";
  const minutesString = minutes > 0 ? minutes.toString().padStart(2, "0") : "";
  const secondsString = seconds.toString().padStart(2, "0");

  const timeParts = [hoursString, minutesString, secondsString].filter(part => part !== "");
  return timeParts.join(":");
}
