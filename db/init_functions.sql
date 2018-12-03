DELETE FROM experiences WHERE id !=14;
-- DELETE ALL BUT ONE ROW
UPDATE experiences SET locale_google = ?? WHERE id = ??;
-- UPDATE google_locale val