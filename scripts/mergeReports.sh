#!/usr/bin/env bash

OUTPUT_DIR="./coverage"
TEMP_DIR="$OUTPUT_DIR/reports"
INNER_COV_PATH="/coverage/coverage-final.json"

## Create output directory
if [[ ! -e $TEMP_DIR ]]; then
    mkdir -p $TEMP_DIR
elif [[ ! -d $OUTPUT_DIR ]]; then
    echo "$OUTPUT_DIR already exists but is not a directory" 1>&2
fi

# Copy package coverage file into temp directory
for f in ./packages/*; do
    if [ -d "$f" ]; then
        echo "> Getting cov file from $f"
        PROJECT_NAME=$(basename $f)
        cp "$f$INNER_COV_PATH" "$TEMP_DIR/$PROJECT_NAME.json"
    fi
done

echo "> Merging reports"
node ./node_modules/nyc/bin/nyc.js merge $TEMP_DIR $OUTPUT_DIR/coverage-final.json

echo "> Generating final report"
node ./node_modules/nyc/bin/nyc.js report -t $TEMP_DIR --report-dir $OUTPUT_DIR --reporter=html --reporter=cobertura
