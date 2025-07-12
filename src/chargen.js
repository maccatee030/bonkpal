const canvas = document.getElementById("charCanvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const bodySelect = document.getElementById("genderSelect");
const hairStyleSelect = document.getElementById("hairSelect");
const hairColorSelect = document.getElementById("hairColorSelect");
const eyeColorSelect = document.getElementById("eyeColorSelect");
const beardSelect = document.getElementById("beardSelect");
const mustacheSelect = document.getElementById("mustacheSelect");
const hatSelect = document.getElementById("hatSelect");
const torsoSelect = document.getElementById("torsoSelect");
const pantsSelect = document.getElementById("pantsSelect");
const shoesSelect = document.getElementById("shoesSelect");
const leftHandWeaponSelect = document.getElementById("leftHandWeaponSelect");
const rightHandWeaponSelect = document.getElementById("rightHandWeaponSelect");
const petSelect = document.getElementById("petSelect");

const FRAME_WIDTH = 64;
const FRAME_HEIGHT = 64;
const FRAME_X = 0;
const FRAME_Y = 2; // idle facing down
const SCALE = 4;

// === Body Options ===
const bodyOptions = {
  "Male - Light": "./assets/body/male/light.png",
  "Male - Dark": "./assets/body/male/dark.png",
  "Male - Tanned": "./assets/body/male/tanned.png",
  "Male - Black": "./assets/body/male/black.png",
  "Male - Brown": "./assets/body/male/brown.png",
  "Male - Olive": "./assets/body/male/olive.png",
  "Male - Peach": "./assets/body/male/peach.png",
  "Male - White": "./assets/body/male/white.png",
  "Male - Skeleton": "./assets/body/male/skeleton.png",
  "Male - Zombie": "./assets/body/male/zombie.png",
};

const hairStyles = [
  "bangs",
  "bangslong",
  "bangslong2",
  "bangsshort",
  "bedhead",
  "bunches",
  "halfmessy",
  "jewfro",
  "long",
  "longhawk",
  "longknot",
  "loose",
  "male_braid",
  "male_curly",
  "male_single",
  "messy1",
  "messy2",
  "mohawk",
  "page",
  "page2",
  "parted",
  "pixie",
  "plain",
  "ponytail",
  "ponytail2",
  "princess",
  "shorthawk",
  "shortknot",
  "shoulderl",
  "shoulderr",
  "swoop",
  "unkempt",
  "xlong",
  "xlongknot",
];

const eyeColors = [
  "blue",
  "brown",
  "gray",
  "green",
  "orange",
  "purple",
  "red",
  "yellow",
];

const facialColors = [
  "black",
  "blonde",
  "blonde2",
  "blue",
  "blue2",
  "brown",
  "brown2",
  "brunette",
  "brunette2",
  "dark-blonde",
  "gold",
  "gray",
  "gray2",
  "green",
  "green2",
  "light-blonde",
  "light-blonde2",
  "pink",
  "pink2",
  "purple",
  "raven",
  "raven2",
  "redhead",
  "redhead2",
  "ruby-red",
  "white-blonde",
  "white-blonde2",
  "white-cyan",
  "white",
];

const hatOptions = [
  "none",
  "bandanas/bandana_red",
  "caps/leather_cap_male",
  "caps/moon-male",
  "caps/nomoon-male",
  "caps/formal_hat",
  "caps/formal_tophat_black",
  "caps/formal_tophat_brown",
  "crown/crown_gold",
  "crown/crown_red",
  "crown/crown_gray",
  "crown/crown_blue",
  "helms/Male_legion1helmet_bronze",
  "helms/Male_legion1helmet_gold",
  "helms/Male_legion1helmet_steel",
  "helms/Male_legion2helmet_bronze",
  "helms/Male_legion2helmet_gold",
  "helms/Male_legion2helmet_steel",
  "helms/Male_legion3helmet_bronze",
  "helms/Male_legion3helmet_gold",
  "helms/Male_legion3helmet_steel",
  "helms/barbarian-male",
  "helms/barbuta-male",
  "helms/chainhat_male",
  "helms/maximus-male",
  "hoods/chain_hood_male",
  "hoods/cloth_hood_male",
  "hoods/male_hood_black",
  "hoods/wizard_hat_male",
  "horned/32",
  "horned/33",
  "horned/34",
  "horned/35",
  "horned/36",
  "horned/37",
  "magichats/black",
  "magichats/brown",
  "magichats/gray",
  "magichats/red",
  "magichats/teal",
  "magichats/yellow",
  "plate/2",
  "plate/3",
  "plate/4",
  "plate/5",
  "plate/6",
  "plate/7",
];

// === Torso Clothing Options ===
const torsoOptions = [
  { label: "Mail (Male)", value: "mail_male", genders: ["male"] },
  { label: "Jacket (Male)", value: "jacket_male", genders: ["male"] },
  { label: "Tabard (Black)", value: "male_tabard_black", genders: ["male"] },
  { label: "Tabard (Blue)", value: "male_tabard_blue", genders: ["male"] },
  { label: "Tabard (Green)", value: "male_tabard_green", genders: ["male"] },
  { label: "Tabard (Purple)", value: "male_tabard_purple", genders: ["male"] },
  { label: "Tabard (Red)", value: "male_tabard_red", genders: ["male"] },
  { label: "Tabard (Yellow)", value: "male_tabard_yellow", genders: ["male"] },
  { label: "Formal Shirt", value: "formal_shirt", genders: ["male"] },
  {
    label: "Formal Shirt (Stripes)",
    value: "formal_stripes_shirt",
    genders: ["male"],
  },
  {
    label: "Leather Chest (Male)",
    value: "leather_chest_male",
    genders: ["male"],
  },
  {
    label: "Leather Shoulders (Male)",
    value: "leather_shoulders_male",
    genders: ["male"],
  },
  {
    label: "Leather Legion Bauldron (Male, Bronze)",
    value: "male_legionbauldron_bronze",
    genders: ["male"],
  },
  {
    label: "Leather Legion Bauldron (Male, Gold)",
    value: "male_legionbauldron_gold",
    genders: ["male"],
  },
  {
    label: "Leather Legion Bauldron (Male, Steel)",
    value: "male_legionbauldron_steel",
    genders: ["male"],
  },
  { label: "Plate Chest (Male)", value: "plate_chest_male", genders: ["male"] },
  { label: "Plate Arms (Male)", value: "plate_arms_male", genders: ["male"] },
  {
    label: "Plate Legion (Male, Bronze)",
    value: "male_legionplate_bronze",
    genders: ["male"],
  },
  {
    label: "Plate Legion (Male, Gold)",
    value: "male_legionplate_gold",
    genders: ["male"],
  },
  {
    label: "Plate Legion (Male, Steel)",
    value: "male_legionplate_steel",
    genders: ["male"],
  },
  {
    label: "Plate (Male, Bronze)",
    value: "male_plate_bronze_johannessjilund",
    genders: ["male"],
  },
  { label: "Apron (Male)", value: "apron_male", genders: ["male"] },
  {
    label: "Apron (Male, White)",
    value: "apron_male_white",
    genders: ["male"],
  },
  { label: "Bandage (Male)", value: "bandage_male", genders: ["male"] },
  {
    label: "Longsleeve (Male, Brown)",
    value: "male_brown_longsleeve",
    genders: ["male"],
  },
  {
    label: "Longsleeve (Male, Black)",
    value: "male_shirt_black",
    genders: ["male"],
  },
  {
    label: "Longsleeve (Male, Blue)",
    value: "male_shirt_blue",
    genders: ["male"],
  },
  {
    label: "Longsleeve (Male, Green)",
    value: "male_shirt_green",
    genders: ["male"],
  },
  {
    label: "Longsleeve (Male, Purple)",
    value: "male_shirt_purple",
    genders: ["male"],
  },
  {
    label: "Longsleeve (Male, Red)",
    value: "male_shirt_red",
    genders: ["male"],
  },
  {
    label: "Longsleeve (Male, Yellow)",
    value: "male_shirt_yellow",
    genders: ["male"],
  },
  {
    label: "Longsleeve (Male, Maroon)",
    value: "male_maroon_longsleeve",
    genders: ["male"],
  },
  {
    label: "Longsleeve (Male, Teal)",
    value: "male_teal_longsleeve",
    genders: ["male"],
  },
  {
    label: "Longsleeve (Male, White)",
    value: "male_white_longsleeve",
    genders: ["male"],
  },
  {
    label: "Sleeveless (Male, Black)",
    value: "male_sleeveless_black",
    genders: ["male"],
  },
  {
    label: "Sleeveless (Male, Blue)",
    value: "male_sleeveless_blue",
    genders: ["male"],
  },
  {
    label: "Sleeveless (Male, Brown)",
    value: "male_sleeveless_brown",
    genders: ["male"],
  },
  {
    label: "Sleeveless (Male, Red)",
    value: "male_sleeveless_red",
    genders: ["male"],
  },
  {
    label: "Sleeveless (Male, White)",
    value: "male_sleeveless_white",
    genders: ["male"],
  },
];

// === Pants Options ===
const pantsOptions = [
  { label: "Formal Pants", value: "formal_pants.png", genders: ["male"] },
  {
    label: "Formal Pants (Stripes)",
    value: "formal_pants stripes.png",
    genders: ["male"],
  },
  {
    label: "Magenta Pants",
    value: "magenta_pants_male.png",
    genders: ["male"],
  },
  { label: "Pants (Black)", value: "male_pants_black.png", genders: ["male"] },
  { label: "Pants (Blue)", value: "male_pants_blue.png", genders: ["male"] },
  { label: "Pants (Brown)", value: "male_pants_brown.png", genders: ["male"] },
  { label: "Pants (Green)", value: "male_pants_green.png", genders: ["male"] },
  {
    label: "Pants (Purple)",
    value: "male_pants_purple.png",
    genders: ["male"],
  },
  { label: "Pants (Red)", value: "male_pants_red.png", genders: ["male"] },
  {
    label: "Pants (Yellow)",
    value: "male_pants_yellow.png",
    genders: ["male"],
  },
  { label: "Red Pants", value: "red_pants_male.png", genders: ["male"] },
  { label: "Teal Pants", value: "teal_pants_male.png", genders: ["male"] },
  { label: "White Pants", value: "white_pants_male.png", genders: ["male"] },
];

// === Shoes Options (Male only) ===
const shoesOptions = [
  { label: "Black Shoes", value: "black_shoes_male", genders: ["male"] },
  { label: "Brown Shoes", value: "brown_shoes_male", genders: ["male"] },
  { label: "Maroon Shoes", value: "maroon_shoes_male", genders: ["male"] },
  { label: "Male Sandals", value: "Male_sandals", genders: ["male"] },
  { label: "Armor Boots 4", value: "armor_4", genders: ["male"] },
  { label: "Armor Boots 5", value: "armor_5", genders: ["male"] },
  { label: "Armor Boots 6", value: "armor_6", genders: ["male"] },
  { label: "Armor Boots 7", value: "armor_7", genders: ["male"] },
  { label: "Armor Boots 8", value: "armor_8", genders: ["male"] },
  { label: "Armor Boots 9", value: "armor_9", genders: ["male"] },
];

// --- NEW/UPDATED: Weapon Options Arrays (Male Only based on new file tree) ---

const leftHandWeaponOptions = [
  { label: "Crusader", path: "./assets/weapons/lefthand/crusader.png" },
  {
    label: "Kite Blue/Blue",
    path: "./assets/weapons/lefthand/kiteblueblue.png",
  },
  {
    label: "Kite Blue/Gray",
    path: "./assets/weapons/lefthand/kitebluegray.png",
  },
  { label: "Kite Gray", path: "./assets/weapons/lefthand/kitegray.png" },
  {
    label: "Kite Gray/Blue",
    path: "./assets/weapons/lefthand/kitegrayblue.png",
  },
  {
    label: "Kite Gray/Gray",
    path: "./assets/weapons/lefthand/kitegraygray.png",
  },
  {
    label: "Kite Gray/Green",
    path: "./assets/weapons/lefthand/kitegraygreen.png",
  },
  {
    label: "Kite Gray/Orange",
    path: "./assets/weapons/lefthand/kitegrayorange.png",
  },
  { label: "Kite Red/Gray", path: "./assets/weapons/lefthand/kiteredgray.png" },
  { label: "Kite Red/Red", path: "./assets/weapons/lefthand/kiteredred.png" },
  { label: "Round Black", path: "./assets/weapons/lefthand/roundblack.png" },
  { label: "Round Brown", path: "./assets/weapons/lefthand/roundbrown.png" },
  { label: "Round Gold", path: "./assets/weapons/lefthand/roundgold.png" },
  { label: "Round Green", path: "./assets/weapons/lefthand/roundgreen.png" },
  { label: "Round Silver", path: "./assets/weapons/lefthand/roundsilver.png" },
  { label: "Round Yellow", path: "./assets/weapons/lefthand/roundyellow.png" },
  { label: "Spartan", path: "./assets/weapons/lefthand/spartan.png" },
];

const rightHandWeaponOptions = [
  { label: "Axe", path: "./assets/weapons/righthand/axe.png" },
  { label: "Bow", path: "./assets/weapons/righthand/bow.png" },
  { label: "Dagger", path: "./assets/weapons/righthand/dagger.png" },
  { label: "Long Knife", path: "./assets/weapons/righthand/longknife.png" },
  { label: "Pickaxe", path: "./assets/weapons/righthand/pickaxe.png" },
  { label: "Spear", path: "./assets/weapons/righthand/spear.png" },
  { label: "Wand", path: "./assets/weapons/righthand/wand.png" },
  { label: "Warhammer", path: "./assets/weapons/righthand/warhammer.png" },
];

const petOptions = [
  { label: "Bread Cat", path: "./assets/breadcat.png" },
  { label: "Cheems", path: "./assets/cheems.png" },
  { label: "Doge", path: "./assets/doge.png" },
  { label: "Pepe", path: "./assets/pepe.png" },
];

// === Helper: Load Image ===
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load: " + src));
  });
}

// === Path Helpers ===
function getTorsoPath(torsoValue, gender) {
  if (torsoValue === "mail_male") return `./assets/torso/chain/mail_male.png`;
  if (torsoValue === "jacket_male")
    return `./assets/torso/chain/tabard/jacket_male.png`;
  if (torsoValue.startsWith("male_tabard_")) {
    const color = torsoValue.replace("male_tabard_", "");
    return `./assets/torso/chain/tabard/male_tabard_${color}.png`;
  }
  if (torsoValue === "formal_shirt")
    return `./assets/torso/shirts/formal/formal_shirt.png`;
  if (torsoValue === "formal_stripes_shirt")
    return `./assets/torso/shirts/formal/formal_stripes_shirt.png`;
  if (torsoValue === "leather_chest_male")
    return `./assets/torso/leather/chest_male.png`;
  if (torsoValue === "leather_shoulders_male")
    return `./assets/torso/leather/shoulders_male.png`;
  if (torsoValue.startsWith("male_legionbauldron_")) {
    const mat = torsoValue.replace("male_legionbauldron_", "");
    return `./assets/torso/leather/Male_legionbauldron_${mat}.png`;
  }
  if (torsoValue === "plate_chest_male")
    return `./assets/torso/plate/chest_male.png`;
  if (torsoValue === "plate_arms_male")
    return `./assets/torso/plate/arms_male.png`;
  if (torsoValue.startsWith("male_legionplate_")) {
    const mat = torsoValue.replace("male_legionplate_", "");
    return `./assets/torso/plate/Male_legionplate_${mat}.png`;
  }
  if (torsoValue === "male_plate_bronze_johannessjilund")
    return `./assets/torso/plate/Male_plate_bronze(Johannes Sjîlund).png`;
  if (torsoValue.startsWith("apron_male")) {
    const suffix = torsoValue.replace("apron_male", "");
    return `./assets/torso/shirts/apron/male/Apron_male${suffix}.png`;
  }
  if (torsoValue === "bandage_male")
    return `./assets/torso/shirts/bandage/Male_Bandage.png`;
  if (torsoValue.startsWith("male_")) {
    const baseName = torsoValue.replace("male_", "");
    if (baseName.startsWith("shirt_")) {
      return `./assets/torso/shirts/longsleeve/male/${torsoValue}.png`;
    } else if (baseName.endsWith("_longsleeve")) {
      return `./assets/torso/shirts/longsleeve/male/${baseName}.png`;
    }
  }
  if (torsoValue.startsWith("male_sleeveless_")) {
    const color = torsoValue.replace("male_sleeveless_", "");
    return `./assets/torso/shirts/sleeveless_male/sleevless_${color}.png`;
  }
  return null;
}
function getPantsPath(pantsValue) {
  if (!pantsValue || pantsValue === "none") return null;
  return `./assets/legs/pants/male/${pantsValue}`;
}
function getShoesPath(shoesValue) {
  if (!shoesValue || shoesValue === "none") return null;
  if (shoesValue.startsWith("armor_")) {
    const num = shoesValue.replace("armor_", "");
    return `./assets/feet/armor/male/${num}.png`;
  } else if (shoesValue === "Male_sandals") {
    return `./assets/feet/shoes/${shoesValue}.png`;
  } else {
    return `./assets/feet/shoes/male/${shoesValue}.png`;
  }
}

// === Dropdown Population ===
Object.entries(bodyOptions).forEach(([label, path]) => {
  const opt = document.createElement("option");
  opt.value = path;
  opt.textContent = label;
  bodySelect.appendChild(opt);
});
hairStyles.forEach((style) => {
  const opt = document.createElement("option");
  opt.value = style;
  opt.textContent = style.charAt(0).toUpperCase() + style.slice(1);
  hairStyleSelect.appendChild(opt);
});
function populateFacialHair(select) {
  select.innerHTML = "";
  const noneOpt = document.createElement("option");
  noneOpt.value = "none";
  noneOpt.textContent = "None";
  select.appendChild(noneOpt);
  facialColors.forEach((color) => {
    const opt = document.createElement("option");
    opt.value = color;
    opt.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    select.appendChild(opt);
  });
}
function populateHatOptions() {
  hatSelect.innerHTML = "";
  hatOptions.forEach((h) => {
    const opt = document.createElement("option");
    opt.value = h;
    opt.textContent =
      h === "none" ? "None" : h.split("/").pop().replace(/_/g, " ");
    hatSelect.appendChild(opt);
  });
}
function populateTorsoOptions(currentGender) {
  const previouslySelectedValue = torsoSelect.value;
  torsoSelect.innerHTML = "";
  const noneOption = document.createElement("option");
  noneOption.value = "none";
  noneOption.textContent = "None";
  torsoSelect.appendChild(noneOption);
  torsoOptions
    .filter((opt) => opt.genders.includes(currentGender))
    .forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      torsoSelect.appendChild(option);
    });
  if (
    [...torsoSelect.options].some(
      (opt) => opt.value === previouslySelectedValue
    )
  ) {
    torsoSelect.value = previouslySelectedValue;
  } else {
    torsoSelect.value = "none";
  }
}
function populatePantsOptions(currentGender) {
  const previouslySelectedValue = pantsSelect.value;
  pantsSelect.innerHTML = "";
  const noneOption = document.createElement("option");
  noneOption.value = "none";
  noneOption.textContent = "None";
  pantsSelect.appendChild(noneOption);
  pantsOptions
    .filter((opt) => opt.genders.includes(currentGender))
    .forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      pantsSelect.appendChild(option);
    });
  if (
    [...pantsSelect.options].some(
      (opt) => opt.value === previouslySelectedValue
    )
  ) {
    pantsSelect.value = previouslySelectedValue;
  } else {
    pantsSelect.value = "none";
  }
}
function populateShoesOptions(currentGender) {
  const previouslySelectedValue = shoesSelect.value;
  shoesSelect.innerHTML = "";
  const noneOption = document.createElement("option");
  noneOption.value = "none";
  noneOption.textContent = "None";
  shoesSelect.appendChild(noneOption);
  shoesOptions
    .filter((opt) => opt.genders.includes(currentGender))
    .forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      shoesSelect.appendChild(option);
    });
  if (
    [...shoesSelect.options].some(
      (opt) => opt.value === previouslySelectedValue
    )
  ) {
    shoesSelect.value = previouslySelectedValue;
  } else {
    shoesSelect.value = "none";
  }
}
function populateWeaponOptions(selectElem, optionsArray) {
  const previouslySelectedValue = selectElem.value;
  selectElem.innerHTML = "";
  const noneOption = document.createElement("option");
  noneOption.value = "none";
  noneOption.textContent = "None";
  selectElem.appendChild(noneOption);
  optionsArray.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.path; // Use the full path as the value
    option.textContent = opt.label;
    selectElem.appendChild(option);
  });
  if (
    [...selectElem.options].some((opt) => opt.value === previouslySelectedValue)
  ) {
    selectElem.value = previouslySelectedValue;
  } else {
    selectElem.value = "none";
  }
}
function populatePetOptions() {
  const previouslySelectedValue = petSelect.value;
  petSelect.innerHTML = "";
  const noneOption = document.createElement("option");
  noneOption.value = "none";
  noneOption.textContent = "None";
  petSelect.appendChild(noneOption);

  petOptions.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.path;
    option.textContent = opt.label;
    petSelect.appendChild(option);
  });

  if (
    [...petSelect.options].some((opt) => opt.value === previouslySelectedValue)
  ) {
    petSelect.value = previouslySelectedValue;
  } else {
    petSelect.value = "none";
  }
}

// ==== Hair, Eye Color Scanners ====
async function scanHairColors(gender) {
  const base = `./assets/hair/${gender}/${hairStyleSelect.value}/`;
  const colors = [
    "black",
    "blue",
    "blue2",
    "brown",
    "dark",
    "gold",
    "gray",
    "green",
    "green2",
    "light",
    "orange",
    "pink",
    "purple",
    "red",
    "silver",
    "white",
    "yellow",
  ];
  const found = [];
  for (const c of colors) {
    try {
      await loadImage(`${base}${c}.png`);
      found.push(c);
    } catch {}
  }
  return found;
}
async function populateHairColors() {
  const gender = "male";
  const colors = await scanHairColors(gender);
  hairColorSelect.innerHTML = "";
  colors.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c.charAt(0).toUpperCase() + c.slice(1);
    hairColorSelect.appendChild(opt);
  });
  drawCharacter();
}
async function populateEyeColors(gender) {
  eyeColorSelect.innerHTML = "";
  for (const color of eyeColors) {
    try {
      await loadImage(`./assets/body/${gender}/eyes/${color}.png`);
      const opt = document.createElement("option");
      opt.value = color;
      opt.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      eyeColorSelect.appendChild(opt);
    } catch {}
  }
}

// ==== MAIN DRAW ====
async function drawCharacter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const bgColor = document.getElementById("bgColorPicker")?.value || "#ffffff";
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const bodyPath = bodySelect.value;
  const gender = "male";
  const layers = [];
  layers.push(loadImage(bodyPath));
  layers.push(
    loadImage(`./assets/body/${gender}/eyes/${eyeColorSelect.value}.png`).catch(
      () => null
    )
  );
  layers.push(
    loadImage(
      `./assets/hair/${gender}/${hairStyleSelect.value}/${hairColorSelect.value}.png`
    ).catch(() => null)
  );
  const beardColor = beardSelect.value;
  if (beardColor !== "none") {
    layers.push(
      loadImage(`./assets/facial/male/beard/${beardColor}.png`).catch(
        () => null
      )
    );
  }
  const mustacheColor = mustacheSelect.value;
  if (mustacheColor !== "none") {
    layers.push(
      loadImage(`./assets/facial/male/mustache/${mustacheColor}.png`).catch(
        () => null
      )
    );
  }
  const hatValue = hatSelect.value;
  if (hatValue !== "none") {
    const [folder, base] = hatValue.split("/");
    const hatPath = `./assets/head/${folder}/${gender}/${base || folder}.png`;
    const fallbackPath = `./assets/head/${folder}/${base || folder}.png`;
    try {
      layers.push(await loadImage(hatPath));
    } catch {
      try {
        layers.push(await loadImage(fallbackPath));
      } catch {}
    }
  }
  // TORSO
  const torsoValue = torsoSelect.value;
  if (torsoValue && torsoValue !== "none") {
    let basePath = getTorsoPath(torsoValue, gender);
    if (basePath) {
      try {
        layers.push(await loadImage(basePath));
      } catch (e) {
        console.error("Failed to load torso image:", basePath, e);
      }
    } else {
      console.warn(
        "No valid path generated for torsoValue:",
        torsoValue,
        "with gender:",
        gender
      );
    }
  }
  // PANTS
  const pantsValue = pantsSelect.value;
  if (pantsValue && pantsValue !== "none") {
    let pantsPath = getPantsPath(pantsValue);
    if (pantsPath) {
      try {
        layers.push(await loadImage(pantsPath));
      } catch (e) {
        console.error("Failed to load pants image:", pantsPath, e);
      }
    } else {
      console.warn("No valid path generated for pantsValue:", pantsValue);
    }
  }
  // SHOES
  const shoesValue = shoesSelect.value;
  if (shoesValue && shoesValue !== "none") {
    let shoesPath = getShoesPath(shoesValue);
    if (shoesPath) {
      try {
        layers.push(await loadImage(shoesPath));
      } catch (e) {
        console.error("Failed to load shoes image:", shoesPath, e);
      }
    } else {
      console.warn("No valid path generated for shoesValue:", shoesValue);
    }
  }
  // LEFT HAND WEAPON
  const leftWeapon = leftHandWeaponSelect.value;
  if (leftWeapon && leftWeapon !== "none") {
    try {
      // Draw the weapon directly as it's a single pose PNG
      const img = await loadImage(leftWeapon);
      layers.push({ img: img, type: "weapon" }); // Mark as weapon for special handling
    } catch (e) {
      console.error("Failed to load left weapon image:", leftWeapon, e);
    }
  }
  // RIGHT HAND WEAPON
  const rightWeapon = rightHandWeaponSelect.value;
  if (rightWeapon && rightWeapon !== "none") {
    try {
      // Draw the weapon directly as it's a single pose PNG
      const img = await loadImage(rightWeapon);
      layers.push({ img: img, type: "weapon" }); // Mark as weapon for special handling
    } catch (e) {
      console.error("Failed to load right weapon image:", rightWeapon, e);
    }
  }
  const petValue = petSelect.value;
  if (petValue && petValue !== "none") {
    try {
      // Draw the pet directly as it's a single pose PNG
      const img = await loadImage(petValue);
      layers.push({ img: img, type: "pet" }); // Mark as pet for special handling
    } catch (e) {
      console.error("Failed to load pet image:", petValue, e);
    }
  }
  // DRAW ALL LAYERS
  for (const layer of await Promise.all(layers)) {
    // If 'layer' is an object (for weapons)
    if (typeof layer === "object" && layer !== null && layer.img) {
      // Draw weapons directly (full image, scaled to canvas)
      ctx.drawImage(
        layer.img,
        0, // destination X
        0, // destination Y
        FRAME_WIDTH * SCALE, // destination width
        FRAME_HEIGHT * SCALE // destination height
      );
    } else if (layer) {
      // Draw other layers from sprite sheet
      ctx.drawImage(
        layer,
        FRAME_X * FRAME_WIDTH,
        FRAME_Y * FRAME_HEIGHT,
        FRAME_WIDTH,
        FRAME_HEIGHT,
        0,
        0,
        FRAME_WIDTH * SCALE,
        FRAME_HEIGHT * SCALE
      );
    }
  }
}

// ==== EVENTS ====
bodySelect.addEventListener("change", async () => {
  const gender = "male";
  populateTorsoOptions(gender);
  populatePantsOptions(gender);
  populateShoesOptions(gender);
  populateWeaponOptions(leftHandWeaponSelect, leftHandWeaponOptions);
  populateWeaponOptions(rightHandWeaponSelect, rightHandWeaponOptions);
  populatePetOptions();

  const prevHairColor = hairColorSelect.value;
  await populateHairColors();
  if ([...hairColorSelect.options].some((opt) => opt.value === prevHairColor)) {
    hairColorSelect.value = prevHairColor;
  }

  const prevEyeColor = eyeColorSelect.value;
  await populateEyeColors(gender);
  if ([...eyeColorSelect.options].some((opt) => opt.value === prevEyeColor)) {
    eyeColorSelect.value = prevEyeColor;
  }
  drawCharacter();
});
document
  .getElementById("bgColorPicker")
  .addEventListener("input", drawCharacter);
document
  .getElementById("bgColorPicker")
  .addEventListener("input", drawCharacter);
hairStyleSelect.addEventListener("change", populateHairColors);
hairColorSelect.addEventListener("change", drawCharacter);
eyeColorSelect.addEventListener("change", drawCharacter);
beardSelect.addEventListener("change", drawCharacter);
mustacheSelect.addEventListener("change", drawCharacter);
hatSelect.addEventListener("change", drawCharacter);
torsoSelect.addEventListener("change", drawCharacter);
pantsSelect.addEventListener("change", drawCharacter);
shoesSelect.addEventListener("change", drawCharacter);
leftHandWeaponSelect.addEventListener("change", drawCharacter);
rightHandWeaponSelect.addEventListener("change", drawCharacter);
petSelect.addEventListener("change", drawCharacter);

// ==== INIT ====
populateFacialHair(beardSelect);
populateFacialHair(mustacheSelect);
populateHatOptions();
const initialGender = "male";
populateTorsoOptions(initialGender);
populatePantsOptions(initialGender);
populateShoesOptions(initialGender);
populateWeaponOptions(leftHandWeaponSelect, leftHandWeaponOptions);
populateWeaponOptions(rightHandWeaponSelect, rightHandWeaponOptions);
populatePetOptions();

(async () => {
  await populateHairColors();
  const gender = "male";
  await populateEyeColors(gender);
  drawCharacter();
})();
