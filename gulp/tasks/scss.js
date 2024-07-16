import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import shorthand from 'gulp-shorthand';

import merge from 'merge-stream';

const sass = gulpSass(dartSass);

let sections = ['style'];

export const scss = () => {

    var streams = sections.map(function (section) {

        // выполнение действий для каждого раздела
        return app.gulp.src(app.path.src.scss[section], { sourcemaps: app.isDev })
            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "SCSS",
                    message: "Error: <%= error.message %>"
                }))
            )
            .pipe(sass({
                outputStyle: 'expanded'
            }))
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    groupCssMediaQueries()
                )
            )
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    webpcss({
                        webpClass: '.webp',
                        noWebpClass: '.no-webp'
                    })
                )
            )
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    autoprefixer({
                        grid: true,
                        overrideBrowserslist: ['last 3 versions'],
                        cascade: true
                    })
                )
            )
            .pipe(app.plugins.replace(/@img\//g, '../img/'))
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    cleanCss()
                )
            )
            .pipe(rename({
                extname: ".min.css"
            }))
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(app.plugins.browsersync.stream())
    });

    // объединение потоков для Gulp
    return merge(streams);
}

export const normalize = () => {
    return app.gulp.src(app.path.src.normalize, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS RESET",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ['last 3 versions'],
                    cascade: true
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                shorthand()
            )
        )
        .pipe(app.gulp.dest(app.path.build.normalize))
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.normalize))
        .pipe(app.plugins.browsersync.stream());
}

export const copyCssLibs = () => {
    return app.gulp.src(app.path.src.cssLibs)
        .pipe(app.gulp.dest(app.path.build.cssLibs))
}

