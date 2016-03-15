#require 'compass/import-once/activate'
# Require any additional compass plugins here.

cache = false
asset_cache_buster :none

# Set this to the root of your project when deployed:
http_path = "../public"
css_dir = "../public/css"
sass_dir = "scss"
images_dir = "public/images"
javascripts_dir = "public/js"

# http_generated_images_path = "ets/img"

relative_assets = true
output_style = :expanded

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

# line_comments
# line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
