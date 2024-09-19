-- script that lists all bands with Glam rock as their main style, ranked by their longevity
-- if split is NULL split equal to 2024 with INFULL
SELECT DISTINCT band_name, IFNULL(split, 2024) - formed AS lifespan FROM metal_bands WHERE FIND_IN_SET('Glam rock', style) ORDER BY lifespan DESC;
